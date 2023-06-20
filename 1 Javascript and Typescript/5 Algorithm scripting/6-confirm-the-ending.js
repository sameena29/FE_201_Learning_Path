function confirmEnding(str, target) {
  let tarLength = target.length;
  let endString = str.substring(str.length-target.length,str.length);
  if(target == endString){
    return true
  }
  else{
    return false
  }
}

console.log(confirmEnding("Function", "ion"));