class Role {
    constructor(name) {
        this.roles = ['manager', 'engineer', 'intern'];
        this.name = name;

        if (this.name === 'manager') {
            // create something

        } else if (this.name === 'engineer') {
            // create something 2

        } else if (this.name === 'intern') {
            // create something 3
        }
    }
}

module.exports = Role;