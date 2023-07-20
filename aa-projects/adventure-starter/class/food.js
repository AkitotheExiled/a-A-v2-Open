const Item = require("./item");
// FILL THIS OUT

class Food extends Item.Item {
  constructor(name, description) {
    super(name, description);
    this.isFood = true;
  }
}
let food = new Food("sandwich", "a delicious sandwich");
module.exports = {
  Food,
};
