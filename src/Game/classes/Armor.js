const Item = require("./Item");
module.exports = class Armor extends Item {
    constructor(name, description, subClass, recipe, shop, space) {
        super(name, description, "ARMOR", recipe, shop, space);
        this.armor = {
            slot: "",
            defenseAbs: 0,
            defensePer: 0,
            attributes: {
                health: 0,
                attack: 0,
                defense: 0,
                energy: 0,
                magic: 0,
                mana: 0,
            },
        };
    }
};
