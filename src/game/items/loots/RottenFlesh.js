const Loot = require("../../classes/Weapon");

module.exports = class RottenFlesh extends Loot {
    constructor() {
        super({
            name: "Rotten Flesh",
            description: "Rotten Flesh, a pretty useless piece of flesh",
            weight: 3500,
        });
    }
};
