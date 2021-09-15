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
