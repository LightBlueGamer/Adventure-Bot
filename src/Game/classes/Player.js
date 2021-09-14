module.exports = class Player {
    constructor() {
        this.name = "";
        this.level = 1;
        this.experience = 0;
        this.balance = 0;
        this.stats = {
            damage: 0,
            health: 100,
            energy: 100,
            mana: 0,
        };
        this.class = {
            class: "Warrior",
            level: 1,
            experience: 0,
        };
        this.equipment = {
            helmet: null,
            shirt: "Torn Shirt",
            gloves: null,
            pants: "Torn Pants",
            boots: null,
            weapon: "Rock",
            shield: null,
        };
        this.backpack = {
            level: 1,
            items: [],
        };
        this.private = false;
    }
};
