const Armor = require("../../classes/Weapon");

module.exports = class TornShirt extends Armor {
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
