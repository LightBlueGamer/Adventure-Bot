const Item = require("./Item");
module.exports = class Armor extends Item {
    constructor(options) {
        const { name, description, recipe, shop, space, armor, attributes } = options;
        super({ name, description, subClass: "ARMOR", recipe, shop, space });
        this.armor = {
            slot: armor?.slot ?? "HEAD",
            defenseAbs: armor?.defenseAbs ?? 0,
            defensePer: armor?.defensePer ?? 0,
        };
        this.attributes = {
            health: attributes?.health ?? 0,
            damage: attributes?.damage ?? 0,
            defense: attributes?.defense ?? 0,
            energy: attributes?.energy ?? 0,
            mana: attributes?.mana ?? 0,
        };
    }
};
