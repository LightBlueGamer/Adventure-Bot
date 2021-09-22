const { Armor } = require("../../classes");

module.exports = new Armor()
    .setName("Torn Shirt")
    .setDescription("What's left of my shirt")
    .setCategory("Armor")
    .setWeight(3)
    .setSlot("chest")
    .setDefense(0.5)
    .toJSON();
