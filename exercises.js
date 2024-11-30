//Exercise 1
// Use `.map()` to iterate over the following array:
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
// Create a new array where each value is multiplied by 2 and log the new array.

const nums2 = nums.map((index) => {
    return index * 2;
});

console.log(nums2);

//Exercise 7
//See exporting.js and importing.js files

//Exercise 9
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

let isTasty = pizza === 'tasty' ? console.log('yum') : console.log('yuck');