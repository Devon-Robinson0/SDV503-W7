function createLargeArray() {
  let largeArray = new Array(1000000);
  return function(num = 0) {
    console.log(largeArray.length - num);
  };
}

let printArrayLength = createLargeArray();
let printArrayLength2 = createLargeArray();
printArrayLength();
printArrayLength2(999);