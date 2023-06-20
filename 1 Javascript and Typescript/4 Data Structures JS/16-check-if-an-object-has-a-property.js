//If we have an object users with a property of Alan, we could check for its presence in either of the following ways:
//console.log(users.hasOwnProperty('Alan'));
//console.log ('Alan' in users );
//Both of these would return true.

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
 if(userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan") ){
      return true
    }
  else{
      return false
  } 
}
      
  // Only change code above this line
console.log(isEveryoneHere(users));

