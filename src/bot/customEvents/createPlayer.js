const { client } = require("../");

client.on("createPlayer", (user) => {
    if (user.bot) return;
    client.players.ensure(user.id, {
        name: user.username,
        level: 1,
        experience: 0,
        balance: 0,
        stats: {
            damage: 10,
            health: 100,
            energy: 100,
            mana: 100,
            magic: 10,
        },
        playerClass: {
            playerClass: "Warrior",
            level: 1,
            experience: 0,
        },
        equipment: {
            helmet: null,
            shirt: "Torn Shirt",
            gloves: null,
            pants: "Torn Pants",
            boots: null,
            weapon: "Rock",
            shield: null,
        },
        backpack: {
            level: 1,
            items: [],
        },
        private: false,
    });
});
