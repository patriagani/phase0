function dataHandling2(input) {
  //Mengganti hobi dengan jenis kelamin dan nama SMA menggunakan Splice
  input.splice(4,1,"Pria","SMA Internasional Metro")
  console.log(input);
  //Membuat variabel array baru TTL
  var ttl = input[3].split("/")
  //Membuat variabel baru untuk bulan
  var bulan = ttl[1]
  //Switch case untuk memberi nama bulan
  switch (bulan) {
    case "01":
      bulan = "Januari"
      break;
    case "02":
      bulan = "Februari"
      break;
    case "03":
      bulan = "Maret"
      break;
    case "04":
      bulan = "April"
      break;
    case "05":
      bulan = "Mei"
      break;
    case "06":
      bulan = "Juni"
      break;
    case "07":
      bulan = "Juli"
      break;
    case "08":
      bulan = "Agustus"
      break;
    case "09":
      bulan = "September"
      break;
    case "10":
      bulan = "Oktober"
      break;
    case "11":
      bulan = "November"
      break;
    case "12":
      bulan = "Desember"
      break;
    default:
      bulan = "Invalid month"
  } console.log(bulan);
  //Membuat array baru untuk TTL supaya bisa di sort
  var ttlnum = [Number(ttl[0]),Number(ttl[1]),Number(ttl[2])]
  console.log(ttlnum.sort());
  //Membuat TTL yang di join dengan tanda strip "-"
  console.log(ttl.join("-"));
  //Menampilkan hanya 15 karakter pertama dari nama
  console.log(input[1].slice(0,15));
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
