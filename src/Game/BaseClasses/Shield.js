const Item = require("./Item");
module.exports = class Shield extends Item {
    constructor(name, description, subClass, recipe, shop, space) {
        this.shield = {
            blocking: {
                chance: 0,
                blockAbs: 0,
                blockPer: 0,
            },
        };
        super(name, description, "SHIELD", recipe, shop, space);
    }
};
