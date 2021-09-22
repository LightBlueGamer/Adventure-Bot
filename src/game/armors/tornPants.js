const { Armor } = require("../../classes");

module.exports = new Armor()
    .setName("Torn Pants")
    .setDescription("What's left of my pants")
    .setCategory("Armor")
    .setWeight(3)
    .setSlot("legs")
    .setDefense(0.5)
    .toJSON();
