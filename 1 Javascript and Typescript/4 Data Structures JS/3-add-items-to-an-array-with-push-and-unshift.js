//the push() method adds elements to the end of an array, and unshift() adds elements to the beginning

function mixedNumbers(arr) {
  // Only change code below this line
  let var1 = ['I', 2, "three"];
  let var2 = [7, "VIII", 9]; 
  arr.unshift(var1[0], var1[1], var1[2]);
  arr.push(7, "VIII", 9);
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
