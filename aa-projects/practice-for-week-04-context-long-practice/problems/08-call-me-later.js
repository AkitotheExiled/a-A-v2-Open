// Your code here
class CallCenter {
	constructor(name) {
		this.name = name;
		CallCenter.centers.push(this);
	}

	sayHello() {
		console.log(`Hello this is ${this.name}`);
	}

	callMeLater(delay) {
		let context = CallCenter.getInstanceByName(this.name);

		setTimeout(function() {
			context.sayHello();
		}, delay);
	}

	static centers = [];
	static getInstanceByName(name) {
		let instanceIdx;
		CallCenter.centers.forEach((instance, index) => {
			if (instance.name === name)

				instanceIdx = index;
		});

		return CallCenter.centers[instanceIdx];
	}
}

let john = new CallCenter("John");
let msecs = 500;
john.callMeLater(msecs);
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
