const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const ms = require("pretty-ms");
module.exports = {
    devCmd: true,
    permLevel: 0,
    data: new SlashCommandBuilder()
        .setName("stats")
        .setDescription("Shows user stats")
        .addUserOption((option) =>
            option.setName("target").setDescription("User to show stats from")
        )
        .toJSON(),
    async execute(interaction) {
        const user = interaction.options.getUser("target") || interaction.user;
        const player = interaction.client.players.get(user.id);
        if (!player)
            return interaction.reply({
                content: "This user does not have a profile!",
                ephemeral: true,
            });
        if (player.private)
            return interaction.reply({
                content: "This user has their profile set to private!",
                ephemeral: true,
            });
        const embed = new MessageEmbed()
            .setTitle(
                `${
                    user.username.endsWith("s") ? user.username + "'" : user.username + "'s"
                } profile`
            )
            .setColor(`BLURPLE`)
            .setDescription(
                `Level: ${player.level}  |  Experience: ${player.experience}  |  Balance: ${player.balance}\nClass: ${player.playerClass.playerClass}  |  Class level: ${player.playerClass.level}  |  Class exp: ${player.playerClass.experience}`
            )
            .addField(
                "Equipment",
                `\`\`\`${Object.entries(player.equipment)
                    .map(([key, value]) => `${key.toCapital()}: ${value === null ? "None" : value}`)
                    .join("\n")}\`\`\``
            )
            .addField(
                "Stats",
                `\`\`\`${Object.entries(player.stats)
                    .map(
                        ([key, value]) =>
                            `${key === "magic" ? "Magic damage" : key.toCapital()}: ${value}`
                    )
                    .join("\n")}\`\`\``
            )
            .addField(
                "Backpack",
                `\`\`\`Level: ${player.backpack.level}\n${player.backpack.items
                    .map((item) => `${item.amount}x ${item.name}`)
                    .join("\n")}\`\`\``
            );

        interaction.reply({ embeds: [embed], ephemeral: true });
    },
};
