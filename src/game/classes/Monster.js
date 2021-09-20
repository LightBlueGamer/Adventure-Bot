module.exports = class Monster {
    constructor(options) {
        const { name, description, stats, loot, exp } = options;
        this.name = name ?? "No name provided";
        this.description = description ?? "No description provided";
        this.stats = {
            health: {
                value: stats?.health?.value ?? 100,
                levelMult: stats?.health?.levelMult ?? 5,
            },
            defenseAbs: {
                value: stats?.defenseAbs?.value ?? 0,
                levelMult: stats?.defenseAbs?.levelMult ?? 1,
            },
            magicDefenseAbs: {
                value: stats?.magicDefenseAbs?.value ?? 0,
                levelMult: stats?.magicDefenseAbs?.levelMult ?? 0,
            },
            damage: {
                value: stats?.damage?.value ?? 2,
                levelMult: stats?.damage?.levelMult ?? 0.5,
            },
        };
        this.loot = loot ?? [];
        this.exp = exp ?? 5;
    }
};
