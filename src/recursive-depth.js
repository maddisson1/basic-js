const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    if (arr.length === 0) { 
      return 1;
    }
    return Array.isArray(arr) ? 1 + Math.max(...arr.map(el => this.calculateDepth(el))) : 0;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};