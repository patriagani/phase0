// 1. Menyusun Barisan Bintang
console.log("1. Menyusun Barisan Bintang");

var rows1 = 5
var star1 = "*"

while (rows1 > 0) {
  console.log(star1);
  rows1 = rows1 -1

}


// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log("2. Menyusun Barisan Bintang Dengan Nested Looping");

//Cukup rubah rows2 saja kalau mau mengganti ukuran Kali2annya
var rows2 = 5
var column2 = 0
var star2 = "*"

//Looping untuk print sesuai jumlah rows2
while (rows2 > 0) {
  //Looping untuk membuat barisan bintang sesuai jumlah rows2
  while (column2 < rows2) {
    star2 = star2+"*"
    column2++
  }
  console.log(star2);
  rows2--
}


//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping");

var rows3 = 5
var rows = 0
var column3 = 0
var star3 = "*"

//Looping untuk print sesuai jumlah rows3 kali
 while (rows < rows3) {
  //Looping untuk menyesuaikan jumlah bintang pakai variabel column3
  while (column3 < rows) {
    star3 = star3+"*"
    column3++
  }
  console.log(star3);
  rows++
 }


 //No need Nested Looping
 console.log("No need Nested Looping");

 var rows4 = 5
 var star4 = "*"

//Tinggal taruh console.log(star4); dibawah while
 while (rows4 > 0) {
   console.log(star4);
   star4 = star4 + "*"
   rows4--
 }
