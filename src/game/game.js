const fs = require("fs");
const { client } = require("../bot/index");
const { Collection } = require("discord.js");
const path = require("path");

client.classes = new Collection();
client.items = new Collection();

const classFiles = fs.readdirSync("./playerClasses");
for (const file of classFiles) {
    const loc = path.resolve(classFiles, file);
    const playerClass = new (require(loc))(client);
    client.classes.set(playerClass.name, playerClass);
    console.log(`Loading class: ${playerClass.name}`);
}

const itemDirs = fs.readdirSync("./items");
for (const dir of itemDirs) {
    const itemFiles = fs.readdirSync(`./items/${dir}`);
    for (const file of itemFiles) {
        const loc = path.resolve(itemFiles, file);
        const item = new (require(loc))(client);
        client.items.set(item.name, item);
        console.log(`Loading item: ${item.name}`);
    }
}
