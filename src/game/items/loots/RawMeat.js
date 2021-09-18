const Loot = require("../../classes/Weapon");

module.exports = class RawMeat extends Loot {
    constructor() {
        super({
            name: "Raw Meat",
            description: "Raw meat, not edible without cooking first",
            weight: 3000,
        });
    }
};
