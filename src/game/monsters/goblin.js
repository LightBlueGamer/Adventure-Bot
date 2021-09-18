const Monster = require("../classes/Monster");

module.exports = class Goblin extends Monster {
    constructor() {
        super({
            name: "Goblin",
            description:
                "A small green creatue often scavenging around for all types of golden objects.",
            stats: {
                health: 50,
            },
            loot: [{ name: "Gold Coin", weight: 3000, amount: { min: 1, max: 3 } }],
            exp: { min: 1.5, max: 2.5 },
        });
    }
};
