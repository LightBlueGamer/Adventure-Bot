module.exports = class Class {
    constructor(name, description, attributes) {
        (this.name = undefined),
            (this.description = undefined),
            (this.attributes = {
                health: undefined,
                attack: undefined,
                defense: undefined,
                energy: undefined,
                magic: undefined,
                mana: undefined,
            });
    }
};
