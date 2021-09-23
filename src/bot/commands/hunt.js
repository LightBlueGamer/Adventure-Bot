const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js");
const { getMonsters, setMonsterStats } = require("../../modules/functions");
module.exports = {
    devCmd: true,
    permLevel: 0,
    data: new SlashCommandBuilder()
        .setName("hunt")
        .setDescription("Hunt for monsters and other creatures!")
        .toJSON(),
    async execute(interaction) {
        const monsters = getMonsters(10, interaction.client.players.get(interaction.user.id));
        const embed = new MessageEmbed()
            .setTitle(`You look around for something to hunt`)
            .setColor(interaction.member.roles.highest.color ?? "BLURPLE");

        const options = [];
        for (const monster of monsters) {
            options.push({
                label: `Lvl ${monster.level} ${monster.monster.name}`,
                value: `${monsters.indexOf(monster)}`,
            });
        }
        const row = new MessageActionRow().addComponents(
            new MessageSelectMenu()
                .setCustomId("selectMonster")
                .setPlaceholder("Nothing selected")
                .addOptions(options)
        );

        await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });

        const collector = interaction.channel.createMessageComponentCollector({
            filter: (inter) => inter.user.id === interaction.user.id,
        });

        let monsterStats;

        const buttons = new MessageActionRow().addComponents(
            new MessageButton().setCustomId("attack").setLabel("Attack").setStyle("SUCCESS"),
            new MessageButton().setCustomId("block").setLabel("Block").setStyle("PRIMARY"),
            new MessageButton().setCustomId("flee").setLabel("Flee").setStyle("DANGER")
        );

        let monsterBlock = false;
        let playerBlock = false;

        const player = interaction.client.players.get(interaction.user.id);
        const playerMax = {
            health: player.stats.health,
            energy: player.stats.energy,
            mana: player.stats.mana,
        };

        let monsterKilled = false,
            playerKilled = false;

        collector.on("collect", async (i) => {
            if (i.isSelectMenu()) {
                monsterStats = setMonsterStats(monsters[i.values[0]]);
                const embed = new MessageEmbed()
                    .setTitle(`Level ${monsterStats.level} - ${monsterStats.name}`)
                    .setDescription(
                        `Health: ${monsterStats.curHealth}/${monsterStats.maxHealth}   |   Defense: ${monsterStats.defense}
                    Magic defense: ${monsterStats.magicDefense}   |   Damage: ${monsterStats.damage}`
                    )
                    .setColor(interaction.member.roles.highest.color ?? "BLURPLE");
                i.update({ embeds: [embed], components: [buttons] });
            } else if (i.isButton()) {
                const weapon = i.client.weapons.find(
                    (weapon) => weapon.name === player.equipment.weapon
                );
                const embed = new MessageEmbed().setColor(
                    interaction.member.roles.highest.color ?? "BLURPLE"
                );
                if (i.customId === "attack") {
                    let damageToDeal = player.stats.damage + weapon.damage.value;
                    if (Math.floor(Math.random() * (100 - 0) + 0) <= 10)
                        damageToDeal += weapon.damage.value * weapon.damage.critical;
                    embed.setTitle(`You attack the ${monsterStats.name}`);
                    if (monsterBlock) {
                        let endDmg =
                            monsterStats.defense > damageToDeal
                                ? 0
                                : damageToDeal - monsterStats.defense;
                        endDmg = Math.round(endDmg);
                        monsterStats.curHealth -= Math.round(endDmg);
                        if (monsterStats.curHealth <= 0) {
                            embed.setDescription(
                                `The ${
                                    monsterStats.name
                                } blocks your attack and you deal ${parseInt(
                                    endDmg
                                )} damage and kill it!`
                            );
                            monsterKilled = true;
                        } else {
                            embed.setDescription(
                                `The ${
                                    monsterStats.name
                                } blocks your attack and you deal ${parseInt(endDmg)} dmg to it.`
                            );
                        }
                    } else {
                        monsterStats.curHealth -= Math.round(damageToDeal);
                        if (monsterStats.curHealth <= 0) {
                            embed.setDescription(
                                `You hit the ${monsterStats.name} and deal ${parseInt(
                                    damageToDeal
                                )} damage and kill it!`
                            );
                            monsterKilled = true;
                        } else {
                            embed.setDescription(
                                `You hit the ${monsterStats.name} and deal ${parseInt(
                                    damageToDeal
                                )} damage to it.`
                            );
                        }
                    }
                } else if (i.customId === "block") {
                    if (player.equipment.shield === null) {
                        embed.setDescription(`You can't block without a shield.`);
                        return i.update({ embeds: [embed], components: [buttons] });
                    } else {
                        playerBlock = true;
                        embed.setDescription(`You prepare to block an incoming attack`);
                    }
                } else if (i.customId === "flee") {
                }
                embed.addFields([
                    {
                        name: "Player HP",
                        value: `${player.stats.health}/${playerMax.health}`,
                        inline: true,
                    },
                    {
                        name: "Player Energy",
                        value: `${player.stats.energy}/${playerMax.energy}`,
                        inline: true,
                    },
                    {
                        name: "Player Mana",
                        value: `${player.stats.mana}/${playerMax.mana}`,
                        inline: true,
                    },
                    {
                        name: "Monster HP",
                        value: `${monsterStats.curHealth < 0 ? "0" : monsterStats.curHealth}/${
                            monsterStats.maxHealth
                        }`,
                        inline: true,
                    },
                ]);
                buttons.components.forEach((button) => button.setDisabled());
                i.update({ components: [buttons] });
                interaction.followUp({ embeds: [embed], ephemeral: true });
                monsterTurn(i);
            }
        });
        async function monsterTurn(i) {
            const embed = new MessageEmbed().setColor(i.member.roles.highest.color ?? "BLURPLE");
            const arr = ["attack", "attack", "attack", "attack", "block", "block"];
            const selection = arr[Math.floor(Math.random() * arr.length)];

            if (selection === "attack") {
                embed.setTitle(`The ${monsterStats.name} attacks`);
                arr.splice(arr.indexOf("attack"), 1);
                arr.push("block");
                let damage = monsterStats.damage;
                if (playerBlock) {
                    const shield = interaction.client.shields.get(player.equipment.shield);
                    if (Math.round(Math.random() * (100 - 0) + 0) <= shield.blockChance) {
                        if (shield.defenseAbsolute < damage) damage -= shield.defenseAbsolute;
                        else damage = 0;
                        damage = Math.round(damage);
                        if (player.health <= 0) {
                            embed.setDescription(
                                `The ${monsterStats.name} attacks you, you attempt to block but it isnt enough and you die.`
                            );
                            playerKilled = true;
                        } else
                            embed.setDescription(
                                `The ${monsterStats.name} attacks you, you block and only take ${damage} damage!`
                            );
                    } else {
                        damage = Math.round(damage);
                        if (player.health <= 0) {
                            embed.setDescription(
                                `The ${monsterStats.name} attacks you, you attempt to block but fials and take ${damage} damage and die.`
                            );
                            playerKilled = true;
                        } else
                            embed.setDescription(
                                `The ${monsterStats.name} attacks you, you attempt to block but fails and take ${damage} damage.`
                            );
                    }
                } else {
                    damage = Math.round(damage);
                    if (player.health <= 0) {
                        embed.setDescription(
                            `The ${monsterStats.name} attacks you and deals ${damage} damage that kills you.`
                        );
                        playerKilled = true;
                    } else
                        embed.setDescription(
                            `The ${monsterStats.name} attacks you and deals ${damage} to you.`
                        );
                }
                interaction.client.players.math(
                    interaction.user.id,
                    "-",
                    parseInt(damage),
                    "stats.health"
                );
            } else if (selection === "block") {
                arr.splice(arr.indexOf("block"), 1);
                arr.push("attack");
                monsterBlock = true;
                embed.setTitle(`The ${monsterStats.name} prepares to block`);
            }
            embed.addFields([
                {
                    name: "Player HP",
                    value: `${interaction.client.players.get(
                        interaction.user.id,
                        "stats.health"
                    )}/${playerMax.health}`,
                    inline: true,
                },
                {
                    name: "Player Energy",
                    value: `${player.stats.energy}/${playerMax.energy}`,
                    inline: true,
                },
                {
                    name: "Player Mana",
                    value: `${player.stats.mana}/${playerMax.mana}`,
                    inline: true,
                },
                {
                    name: "Monster HP",
                    value: `${monsterStats.curHealth < 0 ? "0" : monsterStats.curHealth}/${
                        monsterStats.maxHealth
                    }`,
                    inline: true,
                },
            ]);
            buttons.components.forEach((button) => button.setDisabled(false));
            interaction.followUp({ embeds: [embed], components: [buttons], ephemeral: true });
        }
    },
};
