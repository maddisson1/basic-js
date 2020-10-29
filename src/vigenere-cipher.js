const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse=true) {
    this.reverse = reverse;
  }
  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error;
    }
    text = text.toUpperCase();
    key = key.toUpperCase();
    let res = '';
    let count = 0;

    for (let i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
        let wCode = text.charCodeAt(i);
        let newKey = count % key.length;
        let keyCode = key.charCodeAt(newKey);
        res += String.fromCharCode((wCode + keyCode) % 26 + 65);
        count++;
      } else {
        res += text.charAt(i);
      }

    }
    return this.reverse ? res : res.split('').reverse().join('');
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }    
  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error;
    }
    let res = '';
    text = text.toUpperCase();
    key = key.toUpperCase();
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      let code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        let textCode = code - 65;
        let newKey = count % key.length;
        let keyChar = key.charCodeAt(newKey) - 65;
        let letterCode = (textCode + (26 - keyChar)) % 26;
        res += String.fromCharCode(65 + letterCode);
        count++;
      } else {
        res += text[i];
      }
    }
    return this.reverse ? res : res.split('').reverse().join('');
  }
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
}

module.exports = VigenereCipheringMachine;
