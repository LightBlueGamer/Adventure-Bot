const { SlashCommandBuilder } = require("@discordjs/builders");
const ms = require("pretty-ms");
module.exports = {
    devCmd: false,
    data: new SlashCommandBuilder().setName("ping").setDescription("Checks ping."),
    async execute(interaction) {
        const action = await interaction.reply({ content: `Pinging...`, fetchReply: true });
        return interaction.editReply({
            content: `Bot Latency: ${ms(
                action.createdTimestamp - interaction.createdTimestamp
            )}\nAPI Latency: ${ms(interaction.client.ws.ping)}`,
        });
    },
};
