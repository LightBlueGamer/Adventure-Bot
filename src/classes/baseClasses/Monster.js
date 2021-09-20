const BaseClass = require("./BaseClass");
module.exports = class Monster extends BaseClass {
  constructor ({ options }) {
    super({ options })
    this.name = options.name ?? "No name provided";
    this.description = options.description ?? "No description provided";
    this.health = {
      value: options.health?.value ?? 100,
      multiplier: options.health?.multiplier ?? 5
    };
    this.damage = {
      value: options.damage?.value ?? 2,
      multiplier: options.damage?.multiplier ?? 0.25
    };
    this.defense = {
      value: options.defense?.value ?? 0,
      multiplier: options.defense?.multiplier ?? 0
    };
    this.magicDefense = {
      value: options.magicDefense?.value ?? 0,
      multiplier: options.magicDefense?.multiplier ?? 0
    };
    this.drops = options.drops ?? [];
    this.experience = options.experience ?? 2;
  }

  get name() {
    return this.name;
  }

  get description() {
    return this.description;
  }

  get health() {
    return this.health;
  }

  get damage() {
    return this.damage;
  }

  get defense() {
    return this.defense;
  }

  get magicDefense() {
    return this.magicDefense;
  }

  get drops() {
    return this.drops;
  }

  get experience() {
    return this.experience;
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

  addDrop(name, weight, amount) {
    return this.addDrops({name, weight, amount});
  }

  addDrops(...drops) {
    this.drops.push(...drops);
    return this;
  }

  setExperience(amount) {
    this.experience = amount;
    return this;
  }

};