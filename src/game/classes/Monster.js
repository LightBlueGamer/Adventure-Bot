module.exports = class Monster {
    constructor(options) {
        const { name, description, stats, loot, exp } = options;
        this.name = name ?? "No name provided";
        this.description = description ?? "No description provided";
        this.stats = {
            health: stats?.health ?? 100,
            defenseAbs: stats?.defenseAbs ?? 0,
            magicDefenseAbs: stats?.magicDefenseAbs ?? 0,
            damage: stats?.damage ?? 2,
        };
        this.loot = loot ?? [];
        this.exp = exp ?? 5;
    }
};
