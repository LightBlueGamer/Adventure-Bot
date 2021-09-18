const Loot = require("../../classes/Weapon");

module.exports = class Gunpowder extends Loot {
    constructor() {
        super({
            name: "Gunpowder",
            description: "Some gunpowder can probably be used for explosives or something",
            weight: 2000,
        });
    }
};
