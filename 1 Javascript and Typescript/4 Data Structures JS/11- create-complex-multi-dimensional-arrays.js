let nestedArray = [
  ['deep'],
  [ ['deeper'], ['deeper'] ],
  [   [ ['deepest'], ['deepest'] ], [ [ ['deepest-est?'] ] ]    ] 
  ];
  console.log(nestedArray[2][1][0][0][0]);

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  [['loop', 'shift', 'deep'], [6, 7, 1000, 'method']],
  [[['concat', false, 'deeper'], [true, 'spread', 'array']]],
  [[[['mutate', 1327.98, 'deepest'], ['splice', 'slice', 'push']]]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];

//something to think about
let a = [[23, 'sam' ], 1, 2 ,3 ];
//is this a 2D array or not?