function truncateString(str, num) {
  if(str.length > num){
    let newStr = str.substring(0,num);
    newStr = newStr + "..."
    return newStr
  }
  else{
    return str
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));