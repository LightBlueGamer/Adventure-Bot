const fs = require("fs");
const { client } = require("../bot");
const { Collection } = require("discord.js");
const path = require("path");

client.monsters = new Collection();
client.items = new Collection();

const monsterDir = fs.readdirSync(`${__dirname}/monsters`);
for (const file of monsterDir) {
  const monster = require(`${__dirname}/monsters/${file}`);
  client.monsters.set(monster.name, monster);
  console.log(`Loaded monster ${monster.name}`);
};

const itemDir = fs.readdirSync(`${__dirname}/items`);
for (const file of itemDir) {
  const item = require(`${__dirname}/items/${file}`);
  client.items.set(item.name, item);
  console.log(`Loaded item ${item.name}`);
};