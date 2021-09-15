const Item = require("./Item");
module.exports = class Loot extends Item {
    constructor(options) {
        const { name, description, recipe, shop, space, weight } = options;
        super({ name, description, subClass: "LOOT", recipe, shop, space });
        this.weight = weight ?? 1000;
    }
};
