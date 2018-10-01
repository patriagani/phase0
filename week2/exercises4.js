var tanggal = 17;
var bulan = 8;
var tahun = 1945;
var tanggallengkap

if (tanggal < 32 && bulan < 13 && tahun < 2200 && tahun > 1900) {
  switch(bulan) {
    case 1:
    tanggallengkap = tanggal+" Januari "+tahun
    break;
    case 2:
    tanggallengkap = tanggal+" Februari "+tahun
    break;
    case 3:
    tanggallengkap = tanggal+" Maret "+tahun
    break;
    case 4:
    tanggallengkap = tanggal+" April "+tahun
    break;
    case 5:
    tanggallengkap = tanggal+" Mei "+tahun
    break;
    case 6:
    tanggallengkap = tanggal+" Juni "+tahun
    break;
    case 7:
    tanggallengkap = tanggal+" Juli "+tahun
    break;
    case 8:
    tanggallengkap = tanggal+" Agustus "+tahun
    break;
    case 9:
    tanggallengkap = tanggal+" September "+tahun
    break;
    case 10:
    tanggallengkap = tanggal+" Oktober "+tahun
    break;
    case 11:
    tanggallengkap = tanggal+" November "+tahun
    break;
    case 12:
    tanggallengkap = tanggal+" Desember "+tahun
    break;
    default:
    tanggallengkap = "Invalid month"
  }
} else {
  tanggallengkap = "Invalid date, month or years";
}
console.log(tanggallengkap);
