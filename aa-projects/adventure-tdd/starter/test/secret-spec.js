const { expect } = require('chai');

const {Player} = require("../class/player.js");
const {Room} = require("../class/room.js");
const {Item} = require("../class/item.js");
const {Secret} = require("../class/secret.js");
const {Enemy} = require("../class/enemy.js");
describe ('Secret', function () {

    it('should be an instance of Item and Secret', function () {
        let secret = new Secret("Teleport", "what does it do...");
        let item = new Item("rock", "just a simple rock");

        expect(secret instanceof Item).to.be.true;
        expect(secret instanceof Secret).to.be.true;

        expect(item instanceof Item).to.be.true;
        expect(item instanceof Secret).to.be.false;
      });


      it('can be used by a player', function () {
        let food = new Secret("Teleport", "What does it do...");
        let room = new Room("Test Room", "A test room");
        let player = new Player("player", room);

        player.items.push(food);

        expect(player.items.length).to.equal(1);

        player.useItem("Teleport");

        expect(player.items.length).to.equal(0);

      });

      it('should teleport the player to the enemy', function () {
        let secret = new Secret("Teleport", "What does it do...");
        let room = new Room("Test Room", "A test room");
        let newRoom = new Room("Far away room", "Where goblins lie");
        let enemy = new Enemy("Goblin", "Bad goblin", newRoom);
        let player = new Player("player", room);

        player.items.push(secret);

        player.useItem("Teleport");

        expect(player.currentRoom = newRoom);
      });



});
