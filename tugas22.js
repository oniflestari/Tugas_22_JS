var kalimatAwal = 'Saya ingin belajar bersama';
var hasilAkhir = functionSplit(kalimatAwal).forEach(functionForEach);

function functionSplit(n) {
  var kalimatSplit = n.split(" ");
  return kalimatSplit
}

function functionForEach(item, index, arr) {
  arr[index] = "item : " + item + " index ke " + index;
  console.log(arr[index])
}