module.exports = class Class {
    constructor(options) {
        const {name, description, attributes} = options;
        this.name = name ?? 'Unnamed class';
        this.description = description ?? 'No description provided';
        this.attributes = {
            health: attributes.health ?? 0,
            damage: attributes.damage ?? 0,
            energy: attributes.energy ?? 0,
            mana: attributes.mana ?? 0,
            magic: attributes.magic ?? 0
        };
    }
};
