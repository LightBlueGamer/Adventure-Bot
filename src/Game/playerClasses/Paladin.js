const Class = require("../classes/Class");

module.exports = new Class(
    "Paladin",
    "You may not be a skilled fighter but you know how to protect yourself to take minimal damage.",
    {
        health: 0,
        attack: -5,
        defense: 20,
        energy: 0,
        magic: 0,
        mana: 0,
    }
);
