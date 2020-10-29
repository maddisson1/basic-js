const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (str === null) {
    str = "null"
  } else {
    str = String(str);
  }

  if (options['addition'] === undefined) {
    options['addition'] = '';
  } else if (options['addition'] === null) {
    options.addition = "null"
  } else {
    options['addition'] = String(options['addition']);
  }
  


  if (!options['additionRepeatTimes']) {
    options['additionRepeatTimes'] = 1;
  }
  if (!options['repeatTimes']) {
    options['repeatTimes'] = 1;
  }
  if (!options['separator']) {
    options['separator'] = "+";
  }
  if (!options['additionSeparator']) {
    options['additionSeparator'] = "|";
  }

  let result = (str + (options['addition'] + options['additionSeparator']).repeat(options['additionRepeatTimes'] - 1) +
  options['addition'] + options['separator']).repeat(options['repeatTimes'] - 1) + (str + (options['addition'] + options['additionSeparator']).repeat(options['additionRepeatTimes'] - 1) +
  options['addition']);


  return result;
  

  // if (typeof(str) !== 'string' || typeof(options[addition] !== 'string')) {
  //   str = str.toString();
  //   options[addition] = options[addition].toString();
  // }
  // if (!options[separator]) {
  //   options[separator] = "+"
  // }
  // if (!options[additionSeparator]) {
  //   options[additionSeparator] = "|"
  // }


  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
  