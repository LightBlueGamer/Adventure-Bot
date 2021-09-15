/**
 * The base class for all items.
 * @class Item
 * @param {Object} options The options to create the item with
 * @param {string} options.name The name of the item
 * @param {string} options.description The description of the item
 * @param {string} options.subClass The sub class of the item
 * @param {string} options.recipe The recipe of the item
 * @param {string} options.shop The shop of the item
 * @param {number} options.space The amount of space the item takes
 */

module.exports = class Item {
    constructor(options) {
        const { name, description, subClass, recipe, shop, space } = options;
        this.name = name ?? "No name provided";
        this.description = description ?? "No description provided";
        this.subClass = subClass ?? "No class provided";
        this.recipe = recipe ?? "This item don't have a recipe";
        this.shop = shop ?? "This item can't be traded";
        this.space = space ?? 1;
    }
};
