const { permLevels } = require("../../config.js");

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

String.prototype.toCapital = function () {
    return this.replace(this[0], this[0].toUpperCase());
};

module.exports = { permlevel };
