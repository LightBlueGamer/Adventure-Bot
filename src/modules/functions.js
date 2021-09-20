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
        curHealth: monst.stats.health.value + (monster.level - 1) * monst.stats.health.levelMult,
        maxHealth: monst.stats.health.value + (monster.level - 1) * monst.stats.health.levelMult,
        defenseAbs:
            monst.stats.defenseAbs.value + (monster.level - 1) * monst.stats.defenseAbs.levelMult,
        magicDefenseAbs:
            monst.stats.magicDefenseAbs.value +
            (monster.level - 1) * monst.stats.magicDefenseAbs.levelMult,
        damage: monst.stats.damage.value + (monster.level - 1) * monst.stats.damage.levelMult,
    };
}

String.prototype.toCapital = function () {
    return this.replace(this[0], this[0].toUpperCase());
};

module.exports = { permlevel, getMonsters, setMonsterStats };
