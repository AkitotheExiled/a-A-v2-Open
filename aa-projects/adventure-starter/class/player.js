class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
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

    }

    dropItem(itemName) {

        // Fill this in
        let room = this.currentRoom;
        let item = this.getItemByName(itemName);
        let itemIdx = this.items.indexOf(item);
        this.items.splice(itemIdx, 1);

        room.items.push(item);
    }

    eatItem(itemName) {
        let item = this.getItemByName(itemName);

        if (item.canEat()) {
            let itemIdx = this.items.indexOf(item);
            this.items.splice(itemIdx, 1);

        }

    }

    getItemByName(name) {

        for (let potItem of this.items) {
            if (potItem.name = name) {
                return potItem;
            }
        }
        return null;
    }
}

module.exports = {
  Player,
};
