const BaseClass = require("./BaseClass");
module.exports = class Item extends BaseClass {
  constructor({ options }) {
    super({ options })
    this.name = options.name ?? "No name provided";
    this.description = optionsdescription ?? "No description provided";
    this.category = options.category ?? "misc";
    this.recipe = options.recipe ?? null;
    this.price = {
      sell: options.price?.sell ?? null,
      buy: options.price?.buy ?? null
    };
    this.weight = options.weight ?? null;
  }

  get name() {
    return this.name;
  }
  
  get description() {
    return this.description;
  }

  get category() {
    return this.category;
  }

  get recipe() {
    return this.recipe;
  }

  get price() {
    return this.price;
  }

  get weight() {
    return this.weight;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setCategory(category) {
    this.category = category;
    return this;
  }

  addIngriedient(name, amount) {
    return this.setRecipe({name, amount});
  }

  setRecipe(...ingriedients) {
    this.recipe.push(...ingriedients);
    return this;
  }

  setPrice(sell, buy) {
    this.price = {
      sell,
      buy
    };
    return this;
  }

  setWeight(weight) {
    this.weight = weight;
    return this;
  }
};