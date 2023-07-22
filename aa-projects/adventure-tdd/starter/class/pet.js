const { Character } = require("./character");

class Pet extends Character {
    constructor(name, description, currentRoom, player) {
        super(name, description, currentRoom);
        this.health = 25;
        this.isFed = false;
        this.isDead = false;
        this.owner = player;
        this.owner.pet = this;
    }

    followPlayer() {
        this.currentRoom = this.owner.currentRoom;
    }

    eat(item) {
        if (item.name === "Pet Treat") {
            if (this.isDead === true) {
                this.isDead = false;
                this.isFed = false;
            } else {
                this.isFed = true;
                this.health = 25;
            }

        }
    }

    die() {
        console.log(`Pet: ${this.name} has died!`)
        console.log(`Feed them a treat to revive them!`);
        this.isDead = true;
        this.isFed = false;
    }

    protectPlayer(amount) {
        if (this.isFed && !this.isDead) {
            this.applyDamage(amount);
            return true;
        }
        return false;
    }
}

module.exports = {
    Pet,
  };
