const { permlevel } = require("../../modules/functions");
module.exports = {
    devCmd: false,
    permLevel: 0,
    data: {
        name: "permlevel",
        type: 2,
    },
    async execute(interaction) {
        const user = interaction.targetId;
        interaction.reply({ content: `${permlevel(interaction)}`, ephemeral: true });
    },
};
