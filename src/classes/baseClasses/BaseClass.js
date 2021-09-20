module.exports = class BaseClass {
  constructor({ options }) {
    this.author = options.author ?? "[Light](https://github.com/LightBlueGamer)";
    this.timestamp = new Date()
  }

  get author() {
    return this.author;
  }

  get createdAt() {
    return this.timestamp;
  }

  setAuthor(author) {
    this.author = author;
    return this;
  }
};