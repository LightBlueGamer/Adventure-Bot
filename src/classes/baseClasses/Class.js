const BaseClass = require("./BaseClass");
module.exports = class Class extends BaseClass {
  constructor( options ) {
    super({ options })
      this.name = options?.name ?? "No name provided";
  }

  setName(name) {
    this.name = name;
    return this;
  } 

  toJSON() {
    return {
      name: this.name
    }
  }
};