/*
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.
*/

function fpb(angka1, angka2) {
  var fpb = 0
  if (angka1 < angka2) {
    for (var i = angka1; i > 0; i--) {
      if (angka1 % i === 0 && angka2 % i === 0) {
        fpb=i
        break
      }
    }
  }
  else {
    for (var j = angka2; j > 0; j--) {
      if (angka1 % j === 0 && angka2 % j === 0) {
        fpb = j
        break
      }
    }
  }
  return fpb
}


console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
