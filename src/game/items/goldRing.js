const { Item } = require("../../classes");
module.exports = new Item()
    .setName("Gold Ring")
    .setDescription("A shiny gold rin, can probably trade it for some coins.")
    .setCategory("treasures")
    .setPrice(3)
    .setWeight(0)
    .toJSON();
