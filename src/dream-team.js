const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  let resultString = '';
  let bool = false;
  let arr = [];
  if (members === undefined || members === null) {
    return bool;
  }

  for (let i = 0; i < members.length; i+=1) {
    if (typeof members[i] === 'string') {
      bool = true;
      arr[i] = members[i].trim();
      resultString += arr[i][0].toUpperCase(); 
    }
  }
  if (bool = false) {
    return bool;
  }

  return resultString.split('').sort().join('');
};
