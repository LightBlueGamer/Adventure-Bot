const Item = require("./Item");
module.exports = class Loot extends Item {
  constructor(name, description, subClass, recipe, shop, space) {
    this.weight = 10000;
    super(name, description, "LOOT", recipe, shop, space);
  }
};
