const { Monster } = require("../../classes/");
module.exports = new Monster()
.setName("Goblin")
.setDescription("A small creature reminding of a troll but smaller, not much of a threat and more an annoyance.")
.setHealth(50, 5)
.addDrop("Gold Coin", 2500, 1, 3)
.setExperience(1,3)
.toJSON();