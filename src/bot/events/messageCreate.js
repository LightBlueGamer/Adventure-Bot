const { client } = require("..");
const { permlevel } = require("../../modules/functions");
module.exports = {
    name: "messageCreate",
    once: false,
    async execute(message) {
        client.emit("createPlayer", message.author);
    },
};
