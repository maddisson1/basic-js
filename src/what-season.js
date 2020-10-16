const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let months = {1: 'winter',
                2: 'winter',
                3: 'spring',
                4: 'spring',
                5: 'spring',
                6: 'summer',
                7: 'summer',
                8: 'summer',
                9: 'autumn',
                10: 'autumn',
                11: 'autumn',
                12: 'winter'};

  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  if (isNaN(date)) {
    throw 'Error';
  }

  let dateL = date.toLocaleDateString();
  let month = '';
  for (let i = 0; i < dateL.length; i+=1) {
    if (dateL[i] === '/') {
      break;
    }
    month += dateL[i];
  }
  // month = parseInt(month);
  for (let key in months) {
    if (key === month) {
      return months[key];
    }
  }
};
