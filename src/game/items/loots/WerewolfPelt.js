const Loot = require("../../classes/Weapon");

module.exports = class WerewolfPelt extends Loot {
    constructor() {
        super({
            name: "Werewolf Pelt",
            description: "Pelt skinned of a werewolf, pretty good to battle the cold",
            weight: 500,
        });
    }
};
