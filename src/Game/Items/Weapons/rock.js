const Weapon = require("../../BaseClasses/Weapon");
module.exports = new Weapon(
  "Rock",
  "A rock that I picked up from the ground.",
  subClass,
  recipe,
  shop,
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
