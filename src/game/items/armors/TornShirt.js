const Armor = require("../../classes/Weapon");

module.exports = class TornShirt extends Armor {
    constructor() {
        super({
            name: "Torn Shirt",
            description: "My first shirt, it's torn up from all my travelling",
            armor: {
                slot: "SHIRT",
                defenseAbs: 0.2,
            },
        });
    }
};
