
function insertion(arr) {

  for (let i = 1; i < arr.length; i++) {
      //console.log("arrinloop",arr[i])
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
let givenArray = [4, 6, 2, 10, 8, 7];

insertion(givenArray)
console.log(givenArray)

