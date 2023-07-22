const { Item } = require("./item");
const {World} = require("./world");
class Secret extends Item {
    constructor(name, description) {
        super(name, description);
        this.isUsable = true;
    }

    findNearestEnemy() {
        for (let i = 0; i < World.enemies.length; i++) {
            return World.enemies[i];
        }
        return null;
    }
    use(owner) {
        let nearEnemy = this.findNearestEnemy();
        if (nearEnemy !== null) {
            owner.currentRoom = nearEnemy.currentRoom;
        }

    }
}

module.exports = {
    Secret,
  };
