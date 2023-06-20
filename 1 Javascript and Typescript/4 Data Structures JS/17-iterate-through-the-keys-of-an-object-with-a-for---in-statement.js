//Sometimes you need to iterate through all the keys within an object. You can use a for...in loop to do this. The for...in loop looks like:

const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
//This code logs milk 1 and eggs 12, with each key-value pair on its own line.

//We defined the variable food in the loop head and this variable was set to each of the object's keys on each iteration, resulting in each food's name being printed to the console.

 const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let num = 0; 
   for(const keyName in allUsers){
     if(allUsers[keyName].online == true){
       num = num + 1 ;
     }
   }
   return num
  // Only change code above this line
}

console.log(countOnline(users));