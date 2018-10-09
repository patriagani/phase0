/*
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.
*/

function hitungHuruf(kata) {
  var katabaru = kata.split(" ")
  var result = ""
  var perulangan = 0
  var perulanganFix = 0
  for (var i = 0; i < katabaru.length; i++) {
    for (var j = 0; j < katabaru[i].length; j++) {
      for (var k = j+1; k < katabaru[i].length; k++) {
        if (katabaru[i][j] == katabaru [i][k]) {
          perulangan = perulangan + 1
          break
        }
      }
    }
    if (perulangan > perulanganFix) {
      perulanganFix = perulangan
      result = katabaru[i]
      perulangan = 0
    }
    else {
      perulangan = 0
    }
  }
  if (perulanganFix == 0) {
    return -1
  }
  else {
    return result
  }
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
