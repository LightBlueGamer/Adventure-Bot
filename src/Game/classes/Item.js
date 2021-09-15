/**
 * The base class for all items.
 */
module.exports = class Item {
    constructor(options) {
        const { name, description, subClass, recipe, shop, space } = options;
        /**
         * The name that the item will be instantiated with
         * @type {string}
         */
        this.name = name ?? "No name provided";
        /**
         * The description that the item will be instantiated with
         * @type {string}
         */
        this.description = description ?? "No description provided";
        /**
         * The subclass that the item will be instantiated with
         * @type {string}
         */
        this.subClass = subClass ?? "No class provided";
        /**
         * The recipe that the item will be instantiated with
         * @type {string}
         */
        this.recipe = recipe ?? "This item don't have a recipe";
        /**
         * The shop that the item will be instantiated with
         * @type {string}
         */
        this.shop = shop ?? "This item can't be traded";
        /**
         * The name that the item will be instantiated with
         * @type {string}
         */
        this.space = space ?? 1;
    }
};
