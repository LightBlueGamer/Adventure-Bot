const Item = require("./Item");
module.exports = class Armor extends Item {
    constructor(options) {
        const { name, description, recipe, shop, space, armor } = options;
        super({ name, description, subClass: "ARMOR", recipe, shop, space });
        this.armor = {
            slot: armor.slot ?? "HEAD",
            defenseAbs: armor.defenseAbs ?? 0,
            defensePer: armor.defensePer ?? 0,
            attributes: {
                health: armor.attributes.health ?? 0,
                damage: armor.attributes.damage ?? 0,
                defense: armor.attributes.defense ?? 0,
                energy: armor.attributes.energy ?? 0,
                mana: armor.attributes.mana ?? 0,
            },
        };
    }
};
