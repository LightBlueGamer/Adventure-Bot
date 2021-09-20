const Monster = require("../classes/Monster");

module.exports = class Zombie extends Monster {
    constructor() {
        super({
            name: "Zombie",
            description: "A once dead creature that have came back to life as a braindead monster.",
            stats: {
                health: { value: 120 },
                damage: { value: 1 },
                // Uses the base level multiplier for both damage and health.
            },
            loot: [
                { name: "Zombie Brain", weight: 500, amount: 1 },
                { name: "Rotten Flesh", weight: 3000, amount: { min: 1, max: 2 } },
            ],
            exp: { min: 2, max: 4 },
        });
    }
};
