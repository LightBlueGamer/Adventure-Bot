const Loot = require("../../classes/Weapon");

module.exports = class WerewolfClaw extends Loot {
    constructor() {
        super({
            name: "Werewolf Claw",
            description: "A claw from a werewolf, careful it's sharp",
            weight: 1000,
        });
    }
};
