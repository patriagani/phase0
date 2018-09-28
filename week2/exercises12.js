function konversiMenit(menit) {
  var jam = Math.floor(menit/60)
  var sisa = menit%60
  var MenitJam = String(jam)+":"+String(sisa)
  if (String(sisa).length < 2) {
    var MenitJam = String(jam)+":"+"0"+String(sisa)
  }
  return MenitJam
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
