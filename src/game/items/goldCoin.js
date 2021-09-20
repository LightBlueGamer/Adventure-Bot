const { Item } = require("../../classes/");
module.exports = new Item()
.setName("Gold Coin")
.setDescription("A shiny gold coin, can probably trade with it.")
.setCategory("valuables")
.setPrice(3, 1)
.setWeight(0)
.toJSON();