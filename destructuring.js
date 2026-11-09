// const siswa = {
//     nama : "Andi",
//     umur : 17,
//     kelas : "XII",
//     hobby : "membaca",
// };

// const {nama, umur, kelas, hobby} = siswa;
// delete siswa.kelas;
// console.log (siswa);

// const {nama : namaSiswa, umur:umurSiswa, kelas:kelasSiswa, hobby:hobbySiswa , jurusan = "Belum ditentukan"} = siswa;
// console.log("Nama:", namaSiswa);
// console.log("Umur:", umurSiswa);
// console.log("Kelas:", kelasSiswa);
// console.log("Hobby:", hobbySiswa);
// console.log("Jurusan:", jurusan);

// const warna = ["merah", "hijau", "biru"];
// const [warna1 , warna2 , warna3] = warna;
// console.log( warna1);

// const siswaBaru = [

//     {nama : "Andi", nilai : 80 , umur : 16 , kelas : 8},
//     {nama : "Budi", nilai : 65 , umur : 15 , kelas : 8},
//     {nama : "Citra", nilai : 90 , umur : 16, kelas : 7},
//     {nama : "Dina", nilai : 70 , umur : 17, kelas : 9},
//     {nama : "Eko", nilai : 85 , umur : 18, kelas : 10},
// ];

// siswaBaru.forEach(({nama , nilai, umur, kelas}) => {
//     console.log ( " nama " + nama ,"nilai"+ nilai + " umur " + umur + " kelas " + kelas);
// });

// const namasaja = siswaBaru.map(({nama , nilai}) => {
//     return { nama , nilai};
// });
// console.log(namasaja);

// const namaSaja = siswaBaru.map((namaDoang) => namaDoang.nama);
// const nilaiSaja = siswaBaru.map((nilaiDoang) => nilaiDoang.nilai);
// console.log(namaSaja);
// console.log(nilaiSaja);

const daftarHarga = [
    { nama : "Asus" , harga : 14000000 , kondisi : "baru"},
    { nama : "Lenovo" , harga : 16000000 , kondisi : "bekas"},
    { nama : "Asus" , harga : 22000000 , kondisi : "baru"},
];

const merkHarga = daftarHarga.map(({nama , harga}) => {
    return {nama , harga};
});
console.log(merkHarga);


// const daftarSiswa = [
//     { nama: "Andi", kelas: "X SIJA", umur: 16, gender: "Laki-laki" },
//     { nama: "Sinta", kelas: "X ICT", umur: 15, gender: "Perempuan" },
//     { nama: "Budi", kelas: "X SIJA", umur: 16, gender: "Laki-laki" }
// ];

// const dataSiswa = daftarSiswa.map(({nama , umur}) => {
//     return {nama , umur};
// })
// console.log(dataSiswa);

// const daftarMakanan = [
//     { nama: "Nasi Goreng", harga: 12000, kategori: "Makanan", stok: 10 },
//     { nama: "Es Teh", harga: 5000, kategori: "Minuman", stok: 20 },
//     { nama: "Mie Ayam", harga: 10000, kategori: "Makanan", stok: 8 },
//     { nama: "Jus Jeruk", harga: 7000, kategori: "Minuman", stok: 15 }
// ];

// const dataKantin = daftarMakanan.map(({nama, harga}) => {
//     return {nama,harga};
// });
// console.log(dataKantin);

// const daftarSiswa = [
//     { nama: "Andi", kelas: "X SIJA", nilai: 85, umur: 16 },
//     { nama: "Sinta", kelas: "X ICT", nilai: 90, umur: 15 },
//     { nama: "Budi", kelas: "X SIJA", nilai: 78, umur: 16 },
//     { nama: "Rina", kelas: "X ICT", nilai: 95, umur: 15 }
// ];
// const dataNilai = daftarSiswa.map(({nama , kelas, nilai}) => {
//     return {nama, kelas, nilai};
// });
// console.log(dataNilai);

// const daftarProduk = [
//     { nama: "Laptop Asus", harga: 14000000, stok: 5, kategori: "Laptop" },
//     { nama: "Mouse Logitech", harga: 250000, stok: 10, kategori: "Aksesoris" },
//     { nama: "Keyboard Razer", harga: 800000, stok: 7, kategori: "Aksesoris" },
//     { nama: "Laptop Lenovo", harga: 12000000, stok: 3, kategori: "Laptop" }
// ];
// const produkBaru = daftarProduk.map(({nama,harga,kategori})=> {
//     return {nama , harga , kategori};
// });
// console.log(produkBaru);

// const daftarLaptop = [
//     { nama: "Asus", harga: 14000000 },
//     { nama: "Lenovo", harga: 8000000 },
//     { nama: "Acer", harga: 12000000 },
//     { nama: "HP", harga: 6000000 }
// ];
// const laptopMahal = daftarLaptop.filter(({harga})=> harga > 10000000);
// console.log ( laptopMahal);

// const daftarSiswa = [
//     { nama: "Andi", nilai: 85, kelas: "X SIJA" },
//     { nama: "Sinta", nilai: 95, kelas: "X ICT" },
//     { nama: "Budi", nilai: 70, kelas: "X SIJA" },
//     { nama: "Rina", nilai: 90, kelas: "X ICT" }
// ];

// const siswaBerprestasi = daftarSiswa.filter (({nilai})=> nilai >= 80);
// const siswaBerprestasi2 = daftarSiswa.map(({nama,nilai})=> {
//     return { nama,nilai};
// });
// console.log(siswaBerprestasi);
// console.log(siswaBerprestasi2);

// const siswaBerprestasi = daftarSiswa.filter(({nilai}) => nilai >= 80)
// .map(({nama,nilai}) => 
//     {return {nama,nilai}});
// console.log(siswaBerprestasi);

// const daftarBarang = [
//     { nama: "Laptop", harga: 14000000, stok: 5 },
//     { nama: "Mouse", harga: 150000, stok: 0 },
//     { nama: "Keyboard", harga: 500000, stok: 8 },
//     { nama: "Monitor", harga: 2000000, stok: 0 }
// ];

// const barangTersedia = daftarBarang.filter(({stok}) => stok > 0)
// .map (({nama,harga})=> {
//     return{nama,harga}
// });
// console.log(barangTersedia);

// 

const daftarProduk = [
    { nama: "Laptop", harga: 14000000, stok: 5, kategori: "Elektronik" },
    { nama: "Mouse", harga: 150000, stok: 0, kategori: "Aksesoris" },
    { nama: "Keyboard", harga: 500000, stok: 8, kategori: "Aksesoris" },
    { nama: "Monitor", harga: 2000000, stok: 3, kategori: "Elektronik" }
];
const produkElektronik = daftarProduk.filter(({kategori})=> kategori === "Elektronik")
.filter (({stok})=> stok > 0)
.map (({nama,harga})=> {
    return {nama,harga};
});
console.log(produkElektronik);