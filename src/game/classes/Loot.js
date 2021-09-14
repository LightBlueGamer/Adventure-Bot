const Item = require("./Item");
module.exports = class Loot extends Item {
    constructor(options) {
        const { name, description, subClass, recipe, shop, space, weight } = options;
        super(name, description, "LOOT", recipe, shop, space);
        this.weight = weight ?? 1000;
    }
};
