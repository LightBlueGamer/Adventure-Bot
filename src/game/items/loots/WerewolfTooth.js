const Loot = require("../../classes/Weapon");

module.exports = class WerewolfTooth extends Loot {
    constructor() {
        super({
            name: "Werewolf Tooth",
            description: "A tooth taken out of the mouth from a werewolf",
            weight: 1300,
        });
    }
};
