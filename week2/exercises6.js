// 1. Melakukan Looping Menggunakan While
console.log("1. Melakukan Looping Menggunakan While");

var angka = 0
var angka2 = 1
var angka5 = 1
var angka9 = 1

console.log("LOOPING PERTAMA");
while (angka < 20) {
  angka = angka + 2
  console.log(angka, "- I love coding")
}

console.log("LOOPING KEDUA");
while (angka > 2) {
  console.log(angka, "- I will become fullstack developer")
  angka = angka - 2
}



// 2. Melakukan Looping Menggunakan For
console.log("2. Melakukan Looping Menggunakan For");

console.log("LOOPING PERTAMA");
for (var angka = 1; angka <= 20; angka++) {
  console.log(angka, "- I love coding");
}

console.log("LOOPING KEDUA");
for (var angka = 20; angka > 0; angka--) {
  console.log(angka, "- I will become fullstack developer");
}



// 3. Angka Ganjil dan Genap
console.log("3. Angka Ganjil dan Genap");

// Counter Ganjil Genap
while (angka < 100) {
  angka = angka + 1
  if (angka % 2 === 0) {
    console.log(angka, "Genap")
  } else {
    console.log(angka, "Ganjil")
  }
}

//Counter Pertambahan 2
console.log("Counter Pertambahan 2");
while (angka2 <= 100) {
  if (angka2 % 3 === 0) {
    console.log(angka2, "Kelipatan 3")
  } else {
    console.log(angka2, "")
  }
  angka2 = angka2 + 2
}


//Counter Pertambahan 5
console.log("Counter Pertambahan 5");
while (angka5 <= 100) {
  if (angka5 % 6 === 0) {
    console.log(angka5, "Kelipatan 6")
  } else {
    console.log(angka5, "")
  }
  angka5 = angka5 + 5
}


//Counter Pertambahan 9
console.log("Counter Pertambahan 9");
while (angka9 <= 100) {
  if (angka9 % 10 === 0) {
    console.log(angka9, "Kelipatan 10")
  } else {
    console.log(angka9, "")
  }
  angka9 = angka9 + 9
}
