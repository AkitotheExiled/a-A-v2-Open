const {Player} = require("./class/player.js");
const {Room} = require("./class/room.js");
const {Item} = require("./class/item.js");
const {Food} = require("./class/food.js");

const {World} = require("./class/world.js");

const {Character} = require("./class/character.js");
const {Enemy} = require("./class/enemy.js");

let enemy;
let room;
let item;
let sandwich;
let player;

room = new Room("Test Room", "A test room");
item = new Item("rock", "just a simple rock");
sandwich = new Food("sandwich", "a delicious looking sandwich");
enemy = new Enemy('enemy', 'an ordinary character', room);
player = new Player("player", room);

World.enemies.push(enemy);
World.setPlayer(player);

enemy.items.push(item);
room.items.push(sandwich);



function _random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  }


 function randomChoice() {

    let choices = [0, 1];

    return choices[_random(0, choices.length)];
  }

  console.log(randomChoice());
