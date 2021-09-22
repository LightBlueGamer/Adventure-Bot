const { Weapon } = require("../../classes/");

module.exports = new Weapon()
    .setName("Rock")
    .setDescription("A rock that I picked up from the ground.")
    .setCategory("Weapon")
    .setWeight(1)
    .setDamage(2, 1.05)
    .toJSON();
