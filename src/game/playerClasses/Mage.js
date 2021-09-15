const Class = require("../classes/Class");

module.exports = class Mage extends Class {
    constructor() {
        super({
            name: "Mage",
            description:
                "A mage is a being who with pure will can manipulate the force arouund them.",
            attributes: {
                health: 50,
                damage: -5,
                energy: 0,
                mana: 100,
                magic: 10,
            },
        });
    }
};
