// function map(array, callback) {
//   const mapArr = [];
//   for (const element of array) {
//     const num = Number(element);

//     mapArr.push(callback(num));
//     console.log(mapArr);
//   }
//   console.log(mapArr);
//   return mapArr;
// }

// function filter(arr, callback) {
//   const filArr = [];
//   for (const element of arr) {
//     callback(element) ? filArr.push(element) : console.log(element);
//   }
//   return filArr;
// }

// function every(arr, callback) {
//   let boo = true;
//   for (const element of arr) {
//     callback(element) ? console.log(element) : (boo = false);
//     if (boo === false) {
//       break;
//     }
//   }
//   return boo;
// }
// function some(arr, callback) {
//   let boo = false;
//   for (const element of arr) {
//     callback(element) ? (boo = true) : console.log(element);
//     if (boo === true) {
//       break;
//     }
//   }
//   return boo;
// }

// function find(arr, callback) {
//   let myElement = "";
//   for (const element of arr) {
//     callback(element) ? (myElement = element) : console.log(element);
//     if (myElement === element) {
//       break;
//     }
//   }
//   return myElement;
// }

console.log(xys);

function reduce(arr, callback) {
  let current = "";
  let acc = "";
  let prevEl = "";

  for (const element of arr) {
    console.log(callback());
    // acc = callback(element);
  }

  return acc;
}
