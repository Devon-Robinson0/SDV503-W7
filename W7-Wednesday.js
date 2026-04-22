// let scores = [82, 74, 91, 68, 77];

// for (let i = 0; i < scores.length; i++) {
//     console.log(i, scores[i]);
// }

// const scores = [82, 74, 91, 68, 77];

// for (let score of scores) {
//     console.log(score);
// }

// let scores = [82, 74, 91, 68, 77];

// scores.forEach((score, i) => {
//     console.log(`Position ${i}: ${score}`);
// });

// let nums = [4,7, 2, 9];
// let total = 0;

// for (let i = 0; i < nums.length; i++) {
//     total = total + nums[i];
//     console.log(total);
// }

// console.log(findIndexOf(['a','b', 'c'], 'd'));

// function findIndexOf(items, target) {
//     for (let i = 0; i < items.length; i++) {
//         if (items[i] === target) {
//             return i; // found it exit immediately
//         }
//     }
//     return -1; // not found - sentinel value
// }

let users = [
    { name: 'Ana', age: 22 },
    { name: 'Ben', age: 35 },
    { name: 'Cid', age: 28 }
];

console.log(users.find(u => u.age > 30)); // {name: 'Ben', age: 35 }
console.log(users.findIndex(u => u.age < 30)); // 1