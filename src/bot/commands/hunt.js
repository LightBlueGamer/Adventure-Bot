const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
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

        interaction.reply({ embeds: [embed], components: [row], ephemeral: true });

        const collector = interaction.channel.createMessageComponentCollector({
            filter: (inter) => inter.user.id === interaction.user.id,
            time: 1000 * 60 * 2 + 1000 * 30,
        });

        let monsterStats;

        collector.on("collect", (i) => {
            if (i.isSelectMenu()) {
                monsterStats = setMonsterStats(monsters[i.values[0]]);
                const embed = new MessageEmbed()
                    .setTitle(`Level ${monsterStats.level} - ${monsterStats.name}`)
                    .setDescription(
                        `Health: ${monsterStats.curHealth}/${monsterStats.maxHealth}   |   Defense: ${monsterStats.defenseAbs}
                    Magic defense: ${monsterStats.magicDefenseAbs}   |   Damage: ${monsterStats.damage}`
                    )
                    .setColor(interaction.member.roles.highest.color ?? "BLURPLE");
                interaction.editReply({ embeds: [embed], components: [] });
            }
        });
        collector.on("end", (coll) => {
            console.log(coll.size);
        });
    },
};
