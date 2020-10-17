const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let result = {};
  let turnsNumber = (2**disksNumber) - 1;
  result['turns'] = turnsNumber;
  result['seconds'] = Math.floor(turnsNumber/turnsSpeed*60*60);
  return result;

};
