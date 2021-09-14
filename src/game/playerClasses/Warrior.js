const Class = require("../classes/Class");

module.exports = class Warrior extends Class {
    constructor() {
        super({
            name: 'Warrior',
            description: 'A warrior spends most of their time out on the battlefield in quick sessions slicing down enemies with great effectiveness.',
            attributes: {
                health: 0,
                damage: 10,
                energy: 50,
                mana: 0,
                magic: -10
            }
        });
    }
};
