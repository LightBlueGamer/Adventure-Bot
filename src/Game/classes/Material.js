const Item = require("./Item");
module.exports = class Material extends Item {
    constructor(options) {
        const { name, description, recipe, shop, space, category, consumed } = options;
        super({ name, description, subClass: "MATERIAL", recipe, shop, space });
        this.category = category ?? "MISC";
        this.consumed = consumed ?? true;
    }
};
