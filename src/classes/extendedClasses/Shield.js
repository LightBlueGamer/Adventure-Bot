const Item = require("../baseClasses/Item");
module.exports = class Shield extends Item {
  constructor( options ) {
    super({ options })
    this.defenseAbsolute = options?.defenseAbsolute ?? 5;
    this.blockChance = options?.blockChance ?? 50;
  }

  setDefenseAbsolute(value) {
    this.defenseAbsolute = value;
    return this;
  }

  setBlockChance(value) {
    if(value > 100 || value < 1) return console.error("Value must not be greater than 100 or smaller than 1"), console.trace();
    this.blockChance = value;
    return this;
  }

  toJSON() {
    return {
      author: this.author,
      timestamp: this.timestamp,
      name: this.name,
      description: this.description,
      category: this.category,
      recipe: this.recipe,
      price: this.price,
      weight: this.weight,
      defenseAbsolute: this.defenseAbsolute,
      blockChance: this.blockChance
    }
  }
};