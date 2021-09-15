# Class.js

```text
/**
 * The base class of Classes.
 * @class Class
 * @param {Object} options The options to create the item with
 * @param {string} options.name The name of the item
 * @param {string} options.description The description of the item
 * @param {object} options.attributes The attributes of the class
 */
module.exports = class Class {
    constructor(options) {
        const { name, description, attributes } = options;
        this.name = name ?? "Unnamed class";
        this.description = description ?? "No description provided";
        this.attributes = {
            health: attributes.health ?? 0,
            damage: attributes.damage ?? 0,
            energy: attributes.energy ?? 0,
            mana: attributes.mana ?? 0,
            magic: attributes.magic ?? 0,
        };
    }
};
```

