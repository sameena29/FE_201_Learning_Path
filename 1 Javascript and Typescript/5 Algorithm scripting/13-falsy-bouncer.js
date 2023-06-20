function bouncer(arr) {
  let arr1 = [];
  for(let i=0; i<arr.length; i++ ){
    if(arr[i] != false && 
    arr[i] != null && 
    arr[i] !=0 &&
    arr[i] !="" && 
    arr[i] !=undefined && 
    arr[i] !=NaN){
      arr1.push(arr[i]);
    }
    else{
      i++;
    }
  }
  return arr1;
}

console.log(bouncer([7, "ate", "", false, 9, 10]));