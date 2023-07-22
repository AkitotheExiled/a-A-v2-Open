class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isFood = false;
  }

  canEat() {
    return this.isFood;
  }
}

module.exports = {
  Item,
};
