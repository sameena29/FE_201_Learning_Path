function repeatStringNumTimes(str, num) {
  let repStr = "";
  if(num < 0){
     return ""
  }
  else{
    for(let i = 0 ; i<num; i++){
      repStr = repStr + str;
  }
  return repStr;
  }
  
}

console.log(repeatStringNumTimes("abc", 3));