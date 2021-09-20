const { permlevel } = require("../../modules/functions");
module.exports = {
    name: "interactionCreate",
    once: false,
    async execute(interaction) {
        interaction.client.emit("createPlayer", interaction.user);
        if (
            interaction.isButton() ||
            interaction.isMessageComponent() ||
            interaction.isSelectMenu()
        )
            return;
        const command = interaction.client.commands.get(interaction.commandName);
        const level = permlevel(interaction);
        if (!command) return;
        if (level < command.permLevel) {
            return await interaction.reply({
                content: `This command can only be used by level ${command.permLevel} users.`,
                ephemeral: true,
            });
        }

        if (!interaction.inGuild())
            return interaction.reply({
                content: `Commands can only be used inside servers!`,
                ephemeral: true,
            });

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: "There was an error while executing this command!",
                ephemeral: true,
            });
        }
    },
};
