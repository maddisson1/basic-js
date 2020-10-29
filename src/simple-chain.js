const CustomError = require("../extensions/custom-error");

const chainMaker = {

  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`${value}`);

    return this;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(Number.isInteger(position) && position >= 0 && position < this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this;
      
    }
    this.arr = [];
    throw new Error;

    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse();
    return this;

    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    const res = this.arr.join(' )~~( ');
    this.arr = [];
    return `( ${res} )`;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
