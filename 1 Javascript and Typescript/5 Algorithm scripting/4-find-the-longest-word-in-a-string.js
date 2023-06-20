function findLongestWordLength(str) {
  let maxLength = 0;
  let currLength = 0 ;
  for(let i = 0; i<str.length; i++){
    if(str[i] != " "){
      currLength++;
      if(i==str.length -1 && currLength > maxLength){
          maxLength = currLength;
      }
    }
    
    else{
      if(currLength > maxLength){
           maxLength = currLength;
           currLength = 0;
      }
      else {
          currLength = 0;
      }
    }

  }
  return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));