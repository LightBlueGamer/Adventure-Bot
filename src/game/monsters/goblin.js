const Monster = require("../classes/Monster");

module.exports = class Goblin extends Monster {
    constructor() {
        super({
            name: "Goblin",
            description:
                "A small green creatue often scavenging around for all types of golden objects.",
            stats: {
                health: { value: 50 }, // Uses it's default level multiplier but sets the base health to 50
            },
            loot: [
                { name: "Gold Coin", weight: 3000, amount: { min: 1, max: 3 } },
                { name: "Gold Ring", weight: 100, amount: 1 },
            ],
            exp: { min: 1.5, max: 2.5 },
        });
    }
};
