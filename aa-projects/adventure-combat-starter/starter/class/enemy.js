const { Character } = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
  }


  setPlayer(player) {
    this.player = player;
  }

  _random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  }

  randomMove() {
    let rooms = this.currentRoom.getRooms();
    let randomRoom = rooms[this._random(0, rooms.length)];
    this.currentRoom = randomRoom;
    this.cooldown = 3000;
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    this.player.applyDamage(10);
    this.cooldown = 3000;
  }

  applyDamage(amount) {
    if (amount === undefined) {
      return;
    }
    if (this.health <= 0 || this.health - amount <= 0) {
      this.die();
    }
    this.health -= amount;
    this.attackTarget = this.player;

  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
