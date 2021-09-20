const Item = require("../baseClasses/Item");
module.exports = class Armor extends Item {
  constructor( options ) {
    super({ options })
    this.slot = options?.slot ?? "head"
    this.defense = options?.defense ?? 1;
    this.magicDefense = options?.magicDefense ?? 0;
    this.attributes = {
      damage: options?.attributes?.damage ?? 0,
      health: options?.attributes?.health ?? 0,
      energy: options?.attributes?.energy ?? 0,
      mana: options?.attributes?.mana ?? 0,
      magic: options?.attributes?.magic ?? 0
    };
  }

  setSlot(slot) {
    this.slot = slot;
    return this;
  }

  setDefense(value) {
    this.defense = value;
    return this;
  }

  setMagicDefense(value) {
    this.magicDefense = value;
    return this;
  }

  setAttributes(damage, health, energy, mana, magic) {
    this.attributes = {
      damage,
      health,
      energy,
      mana,
      magic
    };
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
      slot: this.slot,
      defense: this.defense,
      magicDefense: this.magicDefense,
      attributes: this.attributes
    }
  }
};