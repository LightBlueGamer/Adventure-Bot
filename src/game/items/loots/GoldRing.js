const Loot = require("../../classes/Weapon");

module.exports = class GoldRing extends Loot {
    constructor() {
        super({
            name: "Gold Ring",
            description: "A shiny ring made from gold, looks expensive",
            weight: 500,
        });
    }
};
