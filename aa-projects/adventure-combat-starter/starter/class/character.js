class Character {

  constructor(name, description, currentRoom) {
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];

    this.health = 100;
    this.strength = 10;

  }

  applyDamage(amount) {
    if (this.health <= 0 || this.health - amount <= 0) {
      this.die();
    }
    this.health -= amount;
  }

  die() {
    this.currentRoom.items = this.currentRoom.items.concat(this.items);
    this.currentRoom = null;
  }

}

module.exports = {
  Character,
};
