function chunkArrayInGroups(arr, size) {
  let finArr = [];
  while (arr.length > 0) {
    finArr.push(arr.splice(0, size));
  }
  return finArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);