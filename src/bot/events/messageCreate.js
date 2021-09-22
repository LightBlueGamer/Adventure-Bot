const { client } = require("..");
module.exports = {
    name: "messageCreate",
    once: false,
    async execute(message) {
        client.emit("createPlayer", message.author);
    },
};
