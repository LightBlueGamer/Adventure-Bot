const Loot = require("../../classes/Weapon");

module.exports = class GoldCoin extends Loot {
    constructor() {
        super({
            name: "Gold Coin",
            description: "A coin I can use for buying items with",
            weight: 2500,
        });
    }
};
