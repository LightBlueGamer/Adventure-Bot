const Weapon = require("../../classes/Weapon");
module.exports = class Rock extends Weapon {
    constructor() {
        super({
            name: 'Rock', 
            description: 'A rock I picked up from the ground.', 
            damage: {
                type: 'BLUNT', 
                value: 2, 
                critical: 1.2
            }
        });
    }
};