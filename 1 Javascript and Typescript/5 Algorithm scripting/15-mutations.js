function mutation(arr) {
  let check = arr[1].toLowerCase();
  let value = arr[0].toLowerCase();
  for (let i = 0; i < check.length; i++) {
    if (value.indexOf(check[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"]));