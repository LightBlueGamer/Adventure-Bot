const Item = require("./Item");
/**
 * The weapon class of items.
 * @class Weapon
 * @extends Item
 * @param {Object} options The options to create the item with
 * @param {string} options.name The name of the item
 * @param {string} options.description The description of the item
 * @param {string} options.subClass The sub class of the item
 * @param {string} options.recipe The recipe of the item
 * @param {string} options.shop The shop of the item
 * @param {number} options.space The amount of space the item takes
 * @param {object} options.damage The damage object of the item
 */
module.exports = class Weapon extends Item {
    constructor(options) {
        const { name, description, recipe, shop, space, damage } = options;
        super({ name, description, subClass: "WEAPON", recipe, shop, space });
        this.damage = {
            type: damage.type ?? "BLUNT",
            value: damage.value ?? 0,
            critical: damage.critical ?? 1.2,
        };
    }
};
