const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // remove line with error and write your code here
  let count = 0;
  for (let i = 0; i < matrix.length; i+=1) {
    let arr = matrix[i];
    for (let j = 0; j < arr.length; j+=1) {
      if (arr[j] === '^^') {
        count+=1;
      }
    }
  }
  return count;
  
};
