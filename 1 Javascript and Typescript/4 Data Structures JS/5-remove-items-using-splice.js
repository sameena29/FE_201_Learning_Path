//splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

//splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes, or positions, of items in the array that splice() is being called upon

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
  arr.splice(1,4);
// Only change code above this line
console.log(arr);