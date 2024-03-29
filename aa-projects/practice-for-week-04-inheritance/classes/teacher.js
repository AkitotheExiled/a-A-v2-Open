const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, subject, years) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = years;
  }

  static combinedYearsOfExperience(teachers) {
    let sum = 0;
    teachers.forEach((teacher) => sum += teacher.yearsOfExperience);
    return sum;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
