const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError {
  constructor(fieldDifference = null, ...params) {
    super(...params);

    this.name = 'MaximumLengthExceededError';
    this.fieldDifference = fieldDifference;
    this.message;
    
    if (this.fieldDifference !== null) {
      this.message = `Maximum length exceeded by ${this.fieldDifference}`
    } else {
      this.message = "Maximum length exceeded";
    }
}
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
