var nama = "Patria";
var peran = "Ksatria";

if(nama === "" && peran === "") {
  console.log("Nama harus diisi!");
}

else if(peran === "") {
  console.log("Halo "+nama+ ", Pilih peranmu untuk memulai game!");
}

else if(nama !== "" && peran === "Ksatria") {
  console.log("Selamat datang di Dunia Proxytia, "+nama);
  console.log("Halo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu!");
}

else if(nama !== "" && peran === "Tabib") {
  console.log("Selamat datang di Dunia Proxytia, "+nama);
  console.log("Halo Tabib "+nama+", kamu akan membantu temanmu yang terluka.");
}

else if(nama !== "" && peran === "Penyihir") {
  console.log("Selamat datang di Dunia Proxytia, "+nama);
  console.log("Halo Tabib "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
}

else {
  console.log("Isi nama dan peran dengan benar");
}
