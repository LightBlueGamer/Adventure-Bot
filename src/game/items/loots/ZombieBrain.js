const Loot = require("../../classes/Weapon");

module.exports = class ZombieBrain extends Loot {
    constructor() {
        super({
            name: "Zombie Brain",
            description: "A brain taken from a zombie, it's like any brain but rotten.",
            weight: 1000,
        });
    }
};
