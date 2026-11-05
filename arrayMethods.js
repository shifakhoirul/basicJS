// const nilai = [80,75,90,85,70];
// nilai.forEach((angka) => {
//     console.log (angka);
// });

// const nilai = [80,75,90,85,70,60,95,88,65,100];
// nilai.forEach((angka) => {
//     console.log (angka + 5);
// });

// nilai.forEach((angka) =>{
//     if (angka >= 75){
//         console.log (angka+"-Lulus");
//     }else {
//         console.log(angka+ "-Remidial");
//     }
// });

// const Nama = [ "Harry" , "Porter" ,"Sylvester", "Viola" , "Maximilian", "Claude" , "Amy" , "Lily", "Jake", "Nana"];
// Nama.forEach ((Nama) => {
//     console.log( "hallo "+Nama)
// });

// const siswa2 = [
// { nama:"Andi", kelas:"X ICT", umur:15, alamat:"Sukoharjo"},
// { nama:"Sylvester", kelas:"XI ICT", umur:17, alamat:"Solo"},
// { nama:"Amy", kelas:"XII ICT", umur:18, alamat:"Tawangsari"},
// ];

// const namaSaja = siswa2.map((namaDoang) => namaDoang.nama);
// const umurSaja = siswa2.map((umurDoang) => umurDoang.umur + 2);

// console.log(namaSaja);
// console.log(umurSaja);

// const nilaiBaru = [80, 65, 90 , 70, 85, 95, 50, 100, 70, 88,];
// const nilaiTidakLulus = nilaiBaru.filter ((angka)=> {
//     return angka <75
    
// });
// console.log(nilaiTidakLulus);

//  const arrayAngka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

 
//  const arrayAngkaGenap = arrayAngka.filter ((jumlah)=>{
//     return jumlah %2 ===0;
//  });
//  console.log(arrayAngkaGenap);

//   const arrayAngkaGanjil = arrayAngka.filter ((jumlah)=>{
//     return jumlah % 2 ! ===0;
//  });
//  console.log(arrayAngkaGanjil);

// const warTicket = [
//     { nama : "konser" , jumlah : 300 , dipesan : 200},
//     { nama : "seminar" , jumlah : 100 , dipesan : 90},
//     { nama : "Workshop" , jumlah : 80 , dipesan : 80},
// ];
// const sisaTicket = warTicket.filter ((Ticket)=> {
// return Ticket.jumlah - Ticket.dipesan >= 30
// })
// console.log (sisaTicket);
 
// const Habis = warTicket.find ((Ticket)=> {
//     return Ticket.jumlah - Ticket.dipesan === 0
// });
// console.log(Habis);

// const sisaTicket3 = warTicket.filter ((Ticket)=> {
//     return Ticket.jumlah - Ticket.dipesan >= 30
// })
// console.log(sisaTicket3);

// const BukanKonser = warTicket.find ((Ticket)=> 
//  Ticket.jumlah - Ticket.dipesan !== 0 && Ticket.nama !== "konser"
// );
// console.log(BukanKonser);

//=======================================================//
// const siswa =[
//     {nama : "Andi" , nilai : 80},
//     {nama : "Budi" , nilai : 65},
//     {nama : "citra" , nilai : 90},
//     {nama : "Dina" , nilai : 75},
//     {nama : "Eko" , nilai : 85},
// ];

// siswa.forEach((siswa) => {
//     if (siswa.nilai >=75){
//         console.log(siswa.nama + " - " + siswa.nilai + " - Lulus");
//     }else {
//         console.log (siswa.nama + " - " + siswa.nilai + " - Remidial");
//     }
// });
//========================================//

//========================================//
// const produk = [
//     {nama : "mouse" , harga : 100000},
//     { nama : "keyboard" , harga : 150000},
//     {nama : "headset" , harga : 200000},
//     {nama : "flashdisk" , harga : 50000},
//     {nama : "webcam" , harga : 250000},
// ];

// const hargaPromo = produk.map ((produk) => produk.harga - (produk.harga * 10/100));
// console.log(hargaPromo);
//========================================//

// const calonAnggota = [
//    { nama : "Andi" , nilai : 85 , kehadiran : 90 },
//    { nama : "Budi" , nilai : 75 , kehadiran : 95 },
//    { nama : "Citra" , nilai : 90 , kehadiran : 85 },
//    { nama : "Dina" , nilai : 80 , kehadiran : 70 },
//    { nama : "Eko" , nilai : 88 , kehadiran : 100 },
//     { nama : "Fajar" , nilai : 70 , kehadiran : 75 },
// ]

//  const yangLolos = calonAnggota.filter ((anggota)=> anggota.nilai >= 80 && anggota.kehadiran >= 80)

// yangLolos.forEach((anggota) => {
//     console.log(anggota.nama)
// });

//  console.log("Jumlah anggota yang lolos:" + yangLolos.length);
//  ========================================//

//  const anggotaLolos = calonAnggota.filter((Anggota) =>{
//     return  Anggota.nilai >= 80 && Anggota.kehadiran >= 80;
//  });

//  anggotaLolos.forEach((Anggota)=>{
//     console.log(Anggota.nama);
//  });
//  console.log("");
//  console.log(`jumlah anggota yang lolos : ${anggotaLolos.length}`);
//========================================//

const inventaris = [
    { kode : "PC001" , nama : "komputer 1" , kondisi : "baik" },
    { kode : "PC002" , nama : "komputer 2" , kondisi : "rusak" },
    { kode : "PC003" , nama : "komputer 3" , kondisi : "baik" },
    { kode : "PC004" , nama : "komputer 4" , kondisi : "perbaikan" },
    { kode : "PC005" , nama : "komputer 5" , kondisi : "baik" },
]

const hasilCari = inventaris.find((item) => {
    return item.kode ==="PC003";
})
    if (hasilCari){
        console.log("nama : " + hasilCari.nama + " Kondisi : " + hasilCari.kondisi);
    }else {
        console.log("item tidak ditemukan");
    }

