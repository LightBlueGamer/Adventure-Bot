const Item = require("./Item");
module.exports = class Weapon extends Item {
    constructor(options) {
        const { name, description, recipe, shop, space, damage } = options;
        super({ name, description, subClass: "WEAPON", recipe, shop, space });
        this.damage = {
            type: damage?.type ?? "BLUNT",
            value: damage?.value ?? 0,
            critical: damage?.critical ?? 1.2,
        };
    }
};
