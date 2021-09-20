const BaseClass = require("./BaseClass");
module.exports = class Monster extends BaseClass {
  constructor ( options ) {
    super( {options} )
    this.name = options?.name ?? "No name provided";
    this.description = options?.description ?? "No description provided";
    this.health = {
      value: options?.health?.value ?? 100,
      multiplier: options?.health?.multiplier ?? 5
    };
    this.damage = {
      value: options?.damage?.value ?? 2,
      multiplier: options?.damage?.multiplier ?? 0.25
    };
    this.defense = {
      value: options?.defense?.value ?? 0,
      multiplier: options?.defense?.multiplier ?? 0
    };
    this.magicDefense = {
      value: options?.magicDefense?.value ?? 0,
      multiplier: options?.magicDefense?.multiplier ?? 0
    };
    this.drops = options?.drops ?? [];
    this.experience = {
      min: options?.experience?.min ?? 1,
      max: options?.experience?.max ?? 3
    };
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setHealth(value, multiplier) {
    this.health = {
      value,
      multiplier
    };
    return this;
  }

  setDamage(value, multiplier) {
    this.damage = {
      value,
      multiplier
    };
    return this;
  }

  setDefense(value, multiplier) {
    this.defense = {
      value,
      multiplier
    };
    return this;
  }

  setMagicDefense(value, multiplier) {
    this.magicDefense = {
      value,
      multiplier
    };
    return this;
  }

  addDrop(name, weight, minAmount, maxAmount) {
    return this.addDrops({name, weight, minAmount, maxAmount});
  }

  addDrops(...drops) {
    this.drops.push(...drops);
    return this;
  }

  setExperience(min, max) {
    this.experience = {min, max};
    return this;
  }

  toJSON() {
    return {
      name: this.name,
      description: this.description,
      health: this.health,
      damage: this.damage,
      defense: this.defense,
      magicDefense: this.magicDefense,
      drops: this.drops,
      experience: this.experience,
    }
  }

};