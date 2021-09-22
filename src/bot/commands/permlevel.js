const { permlevel } = require("../../modules/functions");
module.exports = {
    devCmd: false,
    permLevel: 0,
    data: {
        name: "permlevel",
        type: 2,
    },
    async execute(interaction) {
        interaction.reply({ content: `${permlevel(interaction)}`, ephemeral: true });
    },
};
