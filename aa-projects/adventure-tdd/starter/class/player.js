const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
    this.pet = null;
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    let room = this.currentRoom;
    let roomItems = room.items;

    let item = room.getItemByName(itemName);
    let itemIdx = roomItems.indexOf(item);

    roomItems.splice(itemIdx, 1);
    this.items.push(item);
    console.log(`You picked up a ${itemName}`);
  }

  dropItem(itemName) {

    let room = this.currentRoom;
    let item = this.getItemByName(itemName);
    let itemIdx = this.items.indexOf(item);

    this.items.splice(itemIdx, 1);

    room.items.push(item);
    console.log(`You dropped a ${itemName}`);
  }

  eatItem(itemName) {

    let item = this.getItemByName(itemName);

    if (item.canEat()) {
        let itemIdx = this.items.indexOf(item);
        this.items.splice(itemIdx, 1);
    }
    console.log(`You ate an ${itemName}`);
  }

  useItem(itemName) {

    let item = this.getItemByName(itemName);

    if (item.canUse()) {
        let itemIdx = this.items.indexOf(item);
        this.items.splice(itemIdx, 1);
        item.use(this);
    }
    console.log(`You used an ${itemName}`);
  }

  getItemByName(name) {

    for (let potItem of this.items) {
      if (potItem.name === name) {
          return potItem;
      }
    }
    return null;

  }

  hit(name) {
    let enemy = this.currentRoom.getEnemyByName(name);
    enemy.applyDamage(this.strength);

  }

  feedPet() {
    if (this.pet === null) return;
    let treat = this.getItemByName("Pet Treat");

    this.pet.eat(treat);
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

  applyDamage(amount) {

    if (this.pet !== null) {
      let petProtectedPlayer = this.pet.protectPlayer(amount);
      if (!petProtectedPlayer) {
        this.health -= amount;
      }
    } else {
      if (this.health <= 0 || this.health - amount <= 0) {
        this.die();
      }
      this.health -= amount;
    }
    console.log(`${this.name} took a hit!  ${this.health} remaining!`);

  }


}

module.exports = {
  Player,
};
