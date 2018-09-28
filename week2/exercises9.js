/*Tugas 1
Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa
"Halo Function!", yang kemudian akan ditampilkan di console.*/
function shoutOut() {
  return "Halo Function!";
}
console.log(shoutOut())



/*Tugas 2
Buatlah sebuah fungsi bernama calculateMultiply(),
yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.*/
function calculateMultiply(angka1,angka2) {
  return angka1*angka2;
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);



/*Tugas 3
Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh
parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name],
umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"*/
function processSentence(name,age,address,hobby) {
  var kalimat = "Nama saya, "+name+" umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!";
  return kalimat
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
