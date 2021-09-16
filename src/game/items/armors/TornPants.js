const Armor = require("../../classes/Armor");

module.exports = class TornPants extends Armor {
    constructor() {
        super({
            name: "Torn Pants",
            description: "My first pair of pants, it's torn up from all my travelling",
            armor: {
                slot: "PANTS",
                defenseAbs: 0.2,
            },
        });
    }
};
