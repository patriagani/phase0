/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

    Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

    Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

    Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

    Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

Catatan :

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals (str) {
  var abjad = "abijuvefopABIJUVEFOP"
  var strbaru = ""
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] ==="i" || str[i] === "u" || str[i] === "e" || str[i] === "o" ||
        str[i] === "A" || str[i] ==="I" || str[i] === "U" || str[i] === "E" || str[i] === "O") {
      strbaru = strbaru + abjad[abjad.indexOf(str[i])+1]
    }
    else {
      strbaru = strbaru + str[i]
    }
  }
  return strbaru
}

function reverseWord (str) {
  var strBalik = ""
  if (str.length === 1) {
    return str
  }
  else {
    strBalik = str[str.length -1]
  }
  return strBalik + reverseWord(str.slice(0,str.length-1))
}

function setLowerUpperCase (str) {
  var strLowerUpper = ""
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      strLowerUpper = strLowerUpper + str[i].toUpperCase()
    }
    else {
      strLowerUpper = strLowerUpper + str[i].toLowerCase()
    }
  }
  return strLowerUpper
}

function removeSpaces (str) {
  var strNoSpace = str.replace(" ","")
  return strNoSpace
}

function passwordGenerator (name) {
  var strChangeVocals = changeVocals(name)
  var strReverse = reverseWord(strChangeVocals)
  var strLowerUpper = setLowerUpperCase(strReverse)
  var password = removeSpaces(strLowerUpper)
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter"
  }
  else {
    return password
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
