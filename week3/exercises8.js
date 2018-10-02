/*
Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.
*/

function pasanganTerbesar(num) {
  var str = String(num)
  var arrnum = str.split("")
  var numpasangan = ""
  var arrnumpasangan = []
  for (var i = 0; i < arrnum.length -1; i++) {
    numpasangan = arrnum[i] + arrnum [i+1]
    arrnumpasangan.push(Number(numpasangan))
  } arrnumpasangan.sort().reverse()
  return arrnumpasangan[0]
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
