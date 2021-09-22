const { readdirSync } = require("fs");
const { client } = require("../bot");
const { Collection } = require("discord.js");

client.monsters = new Collection();
client.items = new Collection();
client.weapons = new Collection();
client.armors = new Collection();

console.log("-".repeat(10));

const monsterDir = readdirSync(`${__dirname}/monsters`);
for (const file of monsterDir) {
    const monster = require(`${__dirname}/monsters/${file}`);
    client.monsters.set(monster.name, monster);
    console.log(`Loaded monster ${monster.name}`);
}

console.log("-".repeat(10));

const itemDir = readdirSync(`${__dirname}/items`);
for (const file of itemDir) {
    const item = require(`${__dirname}/items/${file}`);
    client.items.set(item.name, item);
    console.log(`Loaded item ${item.name}`);
}

console.log("-".repeat(10));

const weaponDir = readdirSync(`${__dirname}/weapons`);
for (const file of weaponDir) {
    const weapon = require(`${__dirname}/weapons/${file}`);
    client.weapons.set(weapon.name, weapon);
    console.log(`Loaded weapon ${weapon.name}`);
}

console.log("-".repeat(10));

const armorDir = readdirSync(`${__dirname}/armors`);
for (const file of armorDir) {
    const armor = require(`${__dirname}/armors/${file}`);
    client.armors.set(armor.name, armor);
    console.log(`Loaded armor ${armor.name}`);
}

console.log("-".repeat(10));
