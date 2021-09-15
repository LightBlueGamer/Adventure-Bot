# Armor.js

```text
const Item = require("./Item");
/**
 * The armor class of items.
 * @class Armor
 * @extends Item
 * @param {Object} options The options to create the item with
 * @param {string} options.name The name of the item
 * @param {string} options.description The description of the item
 * @param {string} options.subClass The sub class of the item
 * @param {string} options.recipe The recipe of the item
 * @param {string} options.shop The shop of the item
 * @param {number} options.space The amount of space the item takes
 * @param {object} options.armor The armor object of the item
 */
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
```

