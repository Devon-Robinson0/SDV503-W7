// function createLargeArray() {
//   let largeArray = new Array(1000000);
//   return function(num = 0) {
//     console.log(largeArray.length - num);
//   };
// }

// let printArrayLength = createLargeArray();
// let printArrayLength2 = createLargeArray();
// printArrayLength();
// printArrayLength2(999);

function createCounter(num) {
    let count = num;
    return function (num = 1) {
        count += num;
        return count;
    };
}

let counter = createCounter(5);
console.log(counter(2)); // 1
console.log(counter()); // 2