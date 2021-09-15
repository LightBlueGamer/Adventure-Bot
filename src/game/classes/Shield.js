const Item = require("./Item");
/**
 * The shield class of items.
 * @class Shield
 * @extends Item
 * @param {Object} options The options to create the item with
 * @param {string} options.name The name of the item
 * @param {string} options.description The description of the item
 * @param {string} options.subClass The sub class of the item
 * @param {string} options.recipe The recipe of the item
 * @param {string} options.shop The shop of the item
 * @param {number} options.space The amount of space the item takes
 * @param {object} options.shield The shield object of the item
 */
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
