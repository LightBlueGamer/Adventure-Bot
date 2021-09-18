const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, guildId, replit } = require("../../config.json");
require("dotenv").config();
const token = process.env.DISCORD_TOKEN;
const { client } = require("./index");
const path = require("path");
const commands = [];
const devCmds = [];
const commandFiles = fs.readdirSync(__dirname + "/commands").filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    if (command.devCmd) devCmds.push(command.data);
    else commands.push(command.data);
}

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
    try {
        await rest.put(Routes.applicationCommands(clientId), { body: commands });
        await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: devCmds });

        console.log("Successfully registered application commands.");
    } catch (error) {
        console.error(error);
    }
})();
