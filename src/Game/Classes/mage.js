const Class = require("../BaseClasses/Class");

module.exports = new Class(
  "Mage",
  "You're and expert in magic and can manipulate it to your will.",
  {
    health: 0,
    attack: -5,
    defense: 0,
    energy: 0,
    magic: 5,
    mana: 10,
  }
);
