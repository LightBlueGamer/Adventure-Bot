const fs = require("fs");
const { client } = require("../bot");
const { Collection } = require("discord.js");
const path = require("path");

client.classes = new Collection();
client.items = new Collection();

console.log("CLASSES:");
const classFiles = fs.readdirSync(__dirname + "/playerClasses");
for (const file of classFiles) {
    const loc = path.resolve(__dirname + "/playerClasses", file);
    const playerClass = new require(loc);
    client.classes.set(playerClass.name.replace(/ /gim, "_"), playerClass);
    console.log(`Loading class: ${playerClass.name}`);
}
console.log("⸻".repeat(50));
console.log("ITEMS:");
const itemDirs = fs.readdirSync(__dirname + "/items");
for (const dir of itemDirs) {
    const itemFiles = fs.readdirSync(__dirname + `/items/${dir}`);
    console.log(`   ${dir.toUpperCase()}:`);
    for (const file of itemFiles) {
        const loc = path.resolve(__dirname + `/items/${dir}`, file);
        const item = new require(loc);
        client.items.set(item.name.replace(/ /gim, "_"), item);
        console.log(`   Loading item: ${item.name}`);
    }
    console.log("⸻".repeat(50));
}
