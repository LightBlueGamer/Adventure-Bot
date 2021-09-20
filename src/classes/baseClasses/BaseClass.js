module.exports = class BaseClass {
  constructor( options ) {
    this.author = options?.author ?? "[Light](https://github.com/LightBlueGamer)";
    this.timestamp = new Date()
  }

  setAuthor(author) {
    this.author = author;
  }
};