const Monster = require("../classes/Monster");

module.exports = class Bandit extends Monster {
    constructor() {
        super({
            name: "Bandit",
            description:
                "A man preying on people traveling the roads alone demanding coin for a free pass",
            stats: {
                health: 100,
            },
            loot: [
                { name: "Gold Coin", weight: 3000, amount: { min: 2, max: 4 } },
                { name: "Necklace", weight: 800, amount: 1 },
                { name: "Gunpowder", weight: 5000, amount: { min: 1, max: 3 } },
            ],
            exp: { min: 2, max: 3.5 },
        });
    }
};
