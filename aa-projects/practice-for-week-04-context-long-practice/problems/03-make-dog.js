// Your code here
class Dog {
	constructor(name) {
		this.name = name;
	}

	changeName(newName) {
		this.name = newName;
	}

	speak(word) {
		return `${this.name} says ${word}`
	}

	static makeJet() {
		return new Dog("Jet");
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
