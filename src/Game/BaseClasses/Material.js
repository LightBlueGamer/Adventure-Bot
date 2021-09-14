const Item = require("./Item");
module.exports = class Material extends Item {
  constructor(name, description, subClass, recipe, shop, space) {
    (this.category = ""), (this.consumed = true);
    super(name, description, "MATERIAL", recipe, shop, space);
  }
};
