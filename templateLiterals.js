// const nama = "Andi";
// const umur = 17;
// console.log(`Nama saya ${nama} dan umur saya ${umur}`);

// const harga = 5000;
// const jumlah = 3;
// console.log (`Total harga: ${harga * jumlah}`);

// const nilai = 80;
// const nilaiTambahan = 5;

// console.log(`Nilai total Andi : ${nilai + nilaiTambahan}`);

// const namanya ="Andi";
// const nilainya = 80;
// const kelas = "X ICT";
// let status ;
// if (nilainya >= 75){
//     status = "Lulus";
// }else {
//     status = "Tidak lulus";
// }

// console.log (`${namanya}mendapatkan nilai: ${nilainya}. Status: ${status}`);

// console.log (` Namanya:${namanya} 
//  kelas:${kelas}
//  Nilai:${nilainya}`);

//  const siswa =
//  {Namanya : "Andi",
//   kelas : "X ICT",
//   Nilai : 80,
//  }
//  console.log (`Namanya : ${siswa.Namanya}
//   kelas : ${siswa.kelas}
//   Nilai : ${siswa.nilai}  `
//  );

//  const totalBelanja = {
//     barang : "Buku",
//     Harga : 5000,
//     Jumlahpembelian : 4
//  }
//  const total = totalBelanja.Harga * totalBelanja.Jumlahpembelian;
//  console.log(`Nama barang:${totalBelanja.barang}
//      Harga:${totalBelanja.Harga}
//      Jumlah : ${totalBelanja.Jumlahpembelian}
//      Total harga:${total} `)

// const orang ={
//     nama : "Rina",
//     umur: 16,
// };
let kategori;
if (orang.umur <13 ){
    kategori = "anak-anak";
}else if (orang.umur <= 17){
    kategori = "Remaja";
}else {kategori = "Dewasa"};
console.log(`nama : ${orang.nama}
             umur : ${orang.umur}
            kategori : ${kategori}`);

// const siswa = [
//     { nama: "Andi", email: "andi@gmail.com", umur: 17 },
//     { nama: "Budi", email: "budi@yahoo.com", umur: 16 },
//     { nama: "Citra", email: "citra@gmail.com", umur: 17 },
//     { nama: "Dina", email: "dina@outlook.com", umur: 18 },
//     { nama: "Eko", email: "eko@gmail.com", umur: 16 }
// ];

const emailSiswa = siswa.filter((siswa)=> {
    return siswa.email.endsWith("@gmail.com")
});
 console.log( emailSiswa);

const siswa = {
    nama: " aNdI pRaTaMa ",
    kelas: "x ict",
    email: " ANDI@GMAIL.COM ",
    username: "  AnDi123  "
};

const { nama , kelas , email , username} = siswa
const namaSiswa = nama.trim(). toUpperCase()
const kelasSiswa = kelas.trim().toUpperCase()
const emailSiswa = email.trim().toLowerCase()
const usernameSiswa = username.trim().toLowerCase()

console.log(namaSiswa);
console.log(kelasSiswa);
console.log(emailSiswa);
console.log(usernameSiswa);

const siswa2 = [
  { nama: "Andi", email: "andi@gmail.com", umur: 17 },
  { nama: "Budi", email: "budi@yahoo.com", umur: 17 },
  { nama: "Citra", email: "citra@gmail.com", umur: 17 }
];

console.log(siswa2
  .filter(user => user.email.endsWith("@gmail.com"))
  .map(user => ({ nama: user.nama, email: user.email }))
);

