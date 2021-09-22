const { permLevels } = require("../../config.js");
const { client } = require("../bot");

function permlevel(interaction) {
    let permlvl = 0;

    const permOrder = permLevels.slice(0).sort((p, c) => (p.level < c.level ? 1 : -1));
    while (permOrder.length) {
        const currentLevel = permOrder.shift();
        if (currentLevel.check(interaction)) {
            permlvl = currentLevel.level;
            break;
        }
    }
    return permlvl;
}

function getMonsters(amount, player) {
    const arr = [];
    for (let i = 0; i < amount; i++) {
        const level = Math.round(Math.random() * (player.level + 4 - player.level) + player.level);
        const monster = client.monsters.random();
        arr.push({ level, monster });
    }
    return arr;
}

function setMonsterStats(monster) {
    const monst = monster.monster;
    return {
        name: monst.name,
        level: monster.level,
        curHealth: monst.health.value + (monster.level - 1) * monst.health.multiplier,
        maxHealth: monst.health.value + (monster.level - 1) * monst.health.multiplier,
        defense: monst.defense.value + (monster.level - 1) * monst.defense.multiplier,
        magicDefense:
            monst.magicDefense.value + (monster.level - 1) * monst.magicDefense.multiplier,
        damage: monst.damage.value + (monster.level - 1) * monst.damage.multiplier,
    };
}

String.prototype.toCapital = function () {
    return this.replace(this[0], this[0].toUpperCase());
};

module.exports = { permlevel, getMonsters, setMonsterStats };
