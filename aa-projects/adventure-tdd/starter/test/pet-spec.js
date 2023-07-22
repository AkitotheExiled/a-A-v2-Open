const { expect } = require('chai');
const { Enemy } = require("../class/enemy.js");
const { Player } = require("../class/player.js");
const { Room } = require("../class/room.js");
const { Item } = require("../class/item.js");
const { Food } = require("../class/food.js");
const { Character } = require("../class/character.js");
const { Pet } = require("../class/pet.js");

describe('Pet', function() {
    let player;
    let pet;
    let room;
    let treat;
    let enemy;
    beforeEach(() => {
        room = new Room("Test Room", "A test room");
        player = new Player("mike", room);
        pet = new Pet("Sox", "Feracious Animal", room, player);
        treat = new Food("Pet Treat", "Feed to your pet!");
    });

    it('should inherit from Character', function() {

        expect(Pet.prototype instanceof Character)
    });

    it('should have a name, strength, fed, and owner properties', function() {

        expect(pet.name).to.equal("Sox");
        expect(pet.health).to.equal(25);
        expect(pet.isFed).to.equal(false);
        expect(pet.owner).to.equal(player);
    });

    it('should follow the player around', function() {

        let room2 = new Room("Test Room2", "Secret Test Room 2");
        room.connectRooms('w', room2);


        expect(pet.currentRoom).to.equal(room);
        player.move('w');

        pet.followPlayer();

        expect(pet.currentRoom).to.equal(room2);
    });

    it('should be fed after given a treat', function() {

        expect(pet.isFed).to.equal(false);
        player.items.push(treat);
        player.feedPet();

        expect(pet.isFed).to.equal(true);

    });

    it('should defend you while fed', function() {
        enemy = new Enemy("Goblin", "bad boy", room);


        expect(pet.health).to.equal(25);

        enemy.setPlayer(player);
        enemy.attack();

        expect(pet.health).to.equal(25);
        expect(player.health).to.equal(90);

        pet.isFed = true;

        enemy.setPlayer(pet);
        enemy.attack();
        expect(pet.health).to.equal(15);
        expect(player.health).to.equal(90);

    });

    it('should not defend you when dead', function() {
        enemy = new Enemy("Goblin", "bad boy", room);


        expect(pet.health).to.equal(25);
        pet.isFed = true;
        enemy.setPlayer(player);
        enemy.attack();
        enemy.attack();
        enemy.attack();

        expect(pet.health).to.equal(-5);
        expect(player.health).to.equal(100);
        expect(pet.isDead).to.equal(true);

        enemy.attack();
        expect(player.health).to.equal(90);

    });

    it('should revive after being fed treat', function() {
        pet.die();

        expect(pet.isDead).to.equal(true);

        player.items.push(treat);
        player.feedPet();

        expect(pet.isDead).to.equal(false);
        expect(pet.health).to.equal(25);
        expect(pet.isFed).to.equal(false);
    });

    it('should not be fed after being revived', function() {
        pet.die();
        player.items.push(treat);
        player.feedPet();

        expect(pet.isFed).to.equal(false);
    });
});
