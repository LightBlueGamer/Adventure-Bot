const Class = require("../baseClasses/Class");

module.exports = new Class(
    "Warrior",
    "You fight with pride and slash your enemies with your weapons.",
    {
        health: 0,
        attack: 5,
        defense: -5,
        energy: 0,
        magic: 0,
        mana: 0,
    }
);
