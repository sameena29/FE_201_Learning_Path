//In practice, we can use the spread operator to copy an array like so:
let thisArray = [1, 2, 3, 4, 5];
let thatArray = [...thisArray];
console.log(thatArray);
//
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));