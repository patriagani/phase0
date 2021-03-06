/*
Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> }
}
*/

function highestScore (students) {
  if (students.length === 0) {
    return {}
  }

  //Membuat nama kelas unik
  var kelas = []
  var unik = false
  kelas.push(students[0].class)
  for (var i = 0; i < students.length; i++) {
    for (var j = 0; j < kelas.length; j++) {
      if(students[i].class !== kelas[j]) {
        unik = true
      }
      else {
        unik = false
        break
      }
    }
    if (unik === true) {
      kelas.push(students[i].class)
    }
  }
  //Membuat wadah object
  var dataObj = {}
  for (var i = 0; i < kelas.length; i++) {
    dataObj[kelas[i]] = {
      name: "",
      score: 0
    }
  }
  //Memasukan nilai maksimum
  for (var i = 0; i < students.length; i++) {
    for (var j = 0; j < kelas.length; j++) {
      if (students[i].class === kelas[j] && students[i].score > dataObj[kelas[j]].score) {
        dataObj[kelas[j]].name = students[i].name
        dataObj[kelas[j]].score = students[i].score
      }
    }
  }
  return dataObj
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
