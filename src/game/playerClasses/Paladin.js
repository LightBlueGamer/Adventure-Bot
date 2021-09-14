const Class = require("../classes/Class");

module.exports = class Paladin extends Class {
    constructor() {
        super({
            name: 'Paladin',
            description: 'A paladin is someone who spent their life training in defense techniques to extend their battle for longer periods of time.',
            attributes: {
                health: 50,
                damage: 5,
                energy: 150,
                mana: 0,
                magic: -5
            }
        });
    }
};
