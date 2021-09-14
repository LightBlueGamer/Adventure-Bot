const Weapon = require("../../classes/Weapon");
module.exports = new Weapon(
    "Rock",
    "A rock that I picked up from the ground.",
    this.subClass,
    this.recipe,
    this.shop,
    1,
    {
        type: "MISC",
        damage: {
            type: "BLUNT",
            base: 2,
            critical: 1.2,
        },
    }
);
