function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
let newArray = greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
console.log(newArray);

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
    for(let i = 0; i < arr.length; i++){
      if(arr[i].indexOf(elem) == -1){
         newArr.push(arr[i]);
      }
    }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 5, 9]], 3));

//something to think about
let a = [1,2,3];
a = a.push(4);
console.log(a);
//4
let b = [1,2,3];
b.push(4);
console.log(b);
//[1, 2, 3, 4]