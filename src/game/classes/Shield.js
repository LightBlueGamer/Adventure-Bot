const Item = require("./Item");
module.exports = class Shield extends Item {
    constructor(options) {
        const { name, description, recipe, shop, space, shield } = options;
        super({ name, description, subClass: "SHIELD", recipe, shop, space });
        this.shield = {
            chance: shield.chance ?? 0,
            blockAbs: shield.blockAbs ?? 0,
            blockPer: shield.blockPer ?? 0,
        };
    }
};
