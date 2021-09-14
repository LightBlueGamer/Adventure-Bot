const fs = require("fs");
const { client } = require("../bot/index");
const { Collection } = require("discord.js");
client.classes = new Collection();

const classFiles = fs.readdirSync("./classes");
for (const file of classFiles) {
    if (file.startsWith("_")) break;
    const _class = require(file);
    client.classes.set(_class.name, _class);
}
