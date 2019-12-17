const Memory = require("./memory");

let memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of memory");
    }

    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }
}

Array.SIZE_RATIO = 3;

function main() {
  Array.SIZE_RATIO = 3;
  let arr = new Array();

  arr.push(3);
  // length: 1
  // capacity: 3
  // address: 0
  arr.push(5);
  // length: 2
  // capacity: 3
  // address: 0
  arr.push(15);
  // length: 3
  // capacity: 3
  // address: 0
  arr.push(19);
  // length: 4
  // capacity: 12
  // address: 3
  arr.push(45);
  // length: 5
  // capacity: 12
  // address: 3
  arr.push(10);
  // length: 6
  // capacity: 12
  // address: 3

  // So the length is 5, as there are 6 blocks of memory, one for each item  in the array. The capacity ratio is x3, hence, once the capacity of 3 was exceeded, the capacity of 3 was increased x3 the size (4) = 12.

  console.log(arr);
}

// main();

// 5. URLify a string

const urlify = string => {
  const array = string.split(" ");

  return array.join("%20");
};

// console.log(urlify("search this and that"));

// Filtering an array remove less than 5

const filterFive = array => {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] < 5) {
      array.splice(i, 1);
    }
  }
  return array;
};

// console.log(filterFive([1, 6, 7, 8, 3, 8]));

// Max sum in the array

const maxArray = array => {
  let maxEnd = 0;
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let currentVal = array[i];
    maxEnd = Math.max(0, maxEnd + currentVal);
    max = Math.max(max, maxEnd);
  }
  return max;
};

// console.log(maxArray([4, 6, -3, 5, -2, 1]));

// Merge Arrays

const merger = (arr1, arr2) => {
  let index1 = 0;
  let index2 = 0;

  let mergedArray = [];

  for (let i = 0; i < arr2.length + arr1.length; i++) {
    if (arr1[index1] < arr2[index2] || arr2[index2] === undefined) {
      mergedArray.push(arr1[index1]);
      index1++;
    } else {
      mergedArray.push(arr2[index2]);
      index2++;
    }
  }
  return mergedArray;
};

// console.log(merger([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// Remove characters

const removeChar = (string, remove) => {
  const newString = "";
  for (let i = 0; i < string.length; i++) {
    // console.log(remove[i]);
    for (let j = 0; j < remove.length; j++) {
      if (string[i] !== remove[j]) {
        // Can't seem to remove anything.
        console.log("not a match");
        newString += string[i];
      }
    }
  }

  return newString;
};

// console.log(removeChar("Battle of the Vowels: Hawaii vs. Grozny", "aeiou"));

// Products

const products = array => {
  let prods = [];

  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i != j) {
        product *= array[j];
      }
    }
    prods.push(product);
  }
  return prods;
};

// console.log(products([1, 3, 9, 4]));

// 2D Array

const twoD = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        for (let entry in array[i]) {
          array[i][entry] = 0;
        }
      }
    }
  }
  return array;
};

console.log(
  twoD([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ])
);
