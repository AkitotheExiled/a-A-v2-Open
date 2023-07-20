const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, salary, title, manager, employees) {
        super(name, salary, title, manager);
        this.employees = employees || [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    _totalSubSalary() {
        let sum = 0;
        this.employees.forEach( function(employee) {
            if (employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary();
            } else {
                sum += employee.salary;
            }
        })

        return sum;
    }
    calculateBonus(multiplier) {
        let sum = this._totalSubSalary();
        return (this.salary + sum) * multiplier;
    }
}


module.exports = Manager;
