class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hi there, I'm ${this.name}.`
  }

  visit(person) {
    return `${this.name} visited ${person.name}.`;
  }

  switchVisit(person2) {
    let result = person2.visit(this);
    return result;
  }

  update(obj) {
    if (typeof obj !== "object") {
      throw new TypeError("Argument must be an object!")
    }
    let keys = Object.keys(obj);
    if (keys.includes("name") && keys.includes("age")) {
      this.name = obj.name;
      this.age = obj.age;
    } else {
      throw new ReferenceError("Argument must have the properties: name, age");
    }
  }

  tryUpdate(obj) {
    try {

      this.update(obj);

    } catch (error) {

      return false;
    }

    return true;
  }

  static greetAll(people = []) {
    if (people.length === 0) {
      return [];
    }

    let greets = [];

    for (let person of people) {
      greets.push(person.sayHello());
    }

    return greets;
  }
}


module.exports = Person;
