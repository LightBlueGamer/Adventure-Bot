const Weapon = require("../../BaseClasses/Weapon");

module.exports = class Rock extends Weapon {
    constructor() {
        super({
            name: "Rock",
            description: "A rock I found and picked up from the ground.",
            damage: {
                type: "BLUNT",
                value: 2,
                critical: 1.2,
            },
        });
    }
};
