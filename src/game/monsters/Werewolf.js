const Monster = require("../classes/Monster");

module.exports = class Werewolf extends Monster {
    constructor() {
        super({
            name: "Werewolf",
            description:
                "A creature looking like a mix of a wolf and a man standing tall with sharp teeth to pierce it's prey",
            stats: {
                health: { value: 200, levelMult: 10 },
                damage: { value: 5, levelMult: 2 },
            },
            loot: [
                { name: "Werewolf Tooth", weight: 1000, amount: { min: 1, max: 2 } },
                { name: "Werewolf Claw", weight: 1000, amount: { min: 1, max: 3 } },
                { name: "Raw Meat", weight: 2300, amount: { min: 1, max: 2 } },
                { name: "Werewolf Pelt", weight: 250, amount: 1 },
            ],
            exp: { min: 5, max: 7.5 },
        });
    }
};
