const Item = require("../baseClasses/Item");
module.exports = class Weapon extends Item {
  constructor({ options }) {
    super({ options })
    this.damage = {
      value: options.damage?.value ?? 2,
      critical: options.damage?.critical ?? 1.2,
    }
    this.magicDamage = {
      value: options.magicDamage?.value ?? 0,
      critical: options.magicDamage?.critical ?? 1.2;
    }
  }

  get damage() {
    return this.damage;
  }

  get magicDamage() {
    return this.damage;
  }

  setDamage(value, critical) {
    this.damage = {
      value,
      critical
    };
    return this;
  }

  setMagicDamage(value, critical) {
    this.magicDamage = {
      value,
      critical
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
      damage: this.damage,
      magicDamage: this.magicDamage
    }
  }
}