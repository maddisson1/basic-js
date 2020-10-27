const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // если в переменной хранится не массив, программа выбрасывает ошибку 
  if (Array.isArray(arr) === false) {
    throw new Error;
  }
  // если массив пустой, возвращаем массив
  if (arr.length === 0) {
    return arr;
  }

  let newArr = []; 

  // проходимся по элементам массива
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === "--discard-prev") {
      newArr.pop();

    } else if (arr[i] === "--double-next") {
        if (arr[i + 1] !== undefined)
          { newArr.push(arr[i + 1]); }

    } else if (arr[i] === "--double-prev") {
        if (arr[i - 1] !== undefined)
          { newArr.push(arr[i - 1]); }

    } else if (arr[i] === "--discard-next") {
        if (arr[i + 2] && arr[i + 2].toString().includes('-prev'))
          { i += 2; }
        else
          { i += 1; }

    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//   for (let i = 0; i < arr.length; i+=1) {
//     if (arr[i] === '--double-next') {
//       if (arr[i+1] !== undefined) {
//         arr[i] = arr[i+1];
//       } else {
//         arr.splice(i, 1);
//       }
//     }
//     if (arr[i] === '--discard-next') {
//       if (arr[i] !== undefined && arr[i+1] !== undefined) {
//         arr.splice(i, 2);
//       } else {
//         arr.splice(i, 1);
//       }
//     }
//     if (arr[i] === '--discard-prev') {
//         if (arr[i] !== undefined && arr[i-1] !== undefined) {
//           arr.splice(i-1, 2);
//         } else {
//           arr.splice(i, 1);
//         }
//     }
//     if (arr[i] === '--double-prev') {
//       if (arr[i-1] !== undefined) {
//         arr[i] = arr[i-1];
//       } else {
//           arr.splice(i, 1);
//         }
//       }
//     }
//     return arr;
// };