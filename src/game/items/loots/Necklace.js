const Loot = require("../../classes/Weapon");

module.exports = class Necklace extends Loot {
    constructor() {
        super({
            name: "Necklace",
            description: "A necklace likely stolen from a young lady",
            weight: 500,
        });
    }
};
