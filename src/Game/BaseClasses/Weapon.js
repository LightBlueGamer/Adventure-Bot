const Item = require("./Item");
module.exports = class Weapon extends Item {
  constructor(name, description, subClass, recipe, shop, space) {
    this.weapon = {
      type: "",
      damage: {
        type: "",
        base: 0,
        critical: 0,
      },
    };
    super(name, description, "WEAPON", recipe, shop, space);
  }
};
