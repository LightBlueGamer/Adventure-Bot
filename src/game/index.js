const fs = require("fs");
const { client } = require("../bot");
const { Collection } = require("discord.js");
const path = require("path");

client.monsters = new Collection();

const monsterDir = fs.readdirSync(`${__dirname}/monsters`);
for (const file of monsterDir) {
  const monster = require(`${__dirname}/monsters/${file}`);
  client.monsters.set(monster.name, monster);
  console.log(`Loaded monster ${monster.name}`);
}