# Material.js

```text
const Item = require("./Item");
/**
 * The material class of items.
 * @class Material
 * @extends Item
 * @param {Object} options The options to create the item with
 * @param {string} options.name The name of the item
 * @param {string} options.description The description of the item
 * @param {string} options.subClass The sub class of the item
 * @param {string} options.recipe The recipe of the item
 * @param {string} options.shop The shop of the item
 * @param {number} options.space The amount of space the item takes
 * @param {string} options.category The category of the item
 * @param {boolean} options.consumed If the item should be consumed when used in a recipe
 */
module.exports = class Material extends Item {
    constructor(options) {
        const { name, description, recipe, shop, space, category, consumed } = options;
        super({ name, description, subClass: "MATERIAL", recipe, shop, space });
        this.category = category ?? "MISC";
        this.consumed = consumed ?? true;
    }
};
```

