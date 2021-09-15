# Loot.js

```text
const Item = require("./Item");
/**
 * The loot class of items.
 * @class Loot
 * @extends Item
 * @param {Object} options The options to create the item with
 * @param {string} options.name The name of the item
 * @param {string} options.description The description of the item
 * @param {string} options.subClass The sub class of the item
 * @param {string} options.recipe The recipe of the item
 * @param {string} options.shop The shop of the item
 * @param {number} options.space The amount of space the item takes
 * @param {number} options.weight The weight of the item 1-10000
 */
module.exports = class Loot extends Item {
    constructor(options) {
        const { name, description, recipe, shop, space, weight } = options;
        super({ name, description, subClass: "LOOT", recipe, shop, space });
        this.weight = weight ?? 1000;
    }
};
```

