function titleCase(str) {
  let str2 = str.charAt(0).toUpperCase();
  console.log(str2);
  for(let i=1; i<str.length; i++ ){
    if(str[i] === " "){
      str2 = str2 + " " + str.charAt(i+1).toUpperCase();
      i=i+1;
    }
    else{
      str2 = str2 + str.charAt(i).toLowerCase();
    }
    
  }
  return str2;
}

console.log(titleCase("I'm a little tea pot"));