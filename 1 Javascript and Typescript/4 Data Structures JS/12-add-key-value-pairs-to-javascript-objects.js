const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

tekkenCharacter['hair color'] = 'dyed orange';
//Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is. Here's an example with a variable:
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
//After adding all the examples, the object will look like this:

// {
//   player: 'Hwoarang',
//   fightingStyle: 'Tae Kwon Doe',
//   human: true,
//   origin: 'South Korea',
//   'hair color': 'dyed orange',
//   'eye color': 'brown'
// };

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

// Only change code above this line

console.log(foods);