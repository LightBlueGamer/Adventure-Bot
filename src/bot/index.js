const fs = require("fs");
const { Client, Intents, Collection } = require("discord.js");
const Enmap = require("enmap");
require("dotenv").config();

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
module.exports = { client };

client.events = new Collection();
client.commands = new Collection();
client.classes = new Collection();
client.items = new Collection();

client.players = new Enmap({ name: "players" });

const eventFiles = fs.readdirSync("./src/bot/events").filter((file) => file.endsWith(".js"));
const commandFiles = fs.readdirSync("./src/bot/commands").filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    client.events.set(event.name, event);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.login(process.env.DISCORD_TOKEN);
