class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager || null;

        if (this.manager !== null) {
            manager.addEmployee(this);
        }
    }

    calculateBonus(multiplier) {
        return (this.salary) * multiplier;
    }
}


module.exports = Employee;
