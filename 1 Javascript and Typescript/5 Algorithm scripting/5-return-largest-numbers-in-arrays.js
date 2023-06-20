function largestOfFour(arr) {
  let maxArray = [];
  for(let i = 0; i<arr.length; i++){
    let maxNum = Number. MIN_SAFE_INTEGER;
    for(let j=0; j<arr[i].length; j++){
      if(arr[i][j] > maxNum){
         maxNum = arr[i][j];
      }
    }
    maxArray.push(maxNum);

  }
  return maxArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));