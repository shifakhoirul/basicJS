// const nama = "Andi";
// console.log(nama.toUpperCase());
// console.log(nama.toLowerCase());

// const username = "AnDi";
// const usernameBaru = username.toLowerCase();
// console.log(usernameBaru);

// const nama = "Andi";
// console.log(nama);
// console.log(nama.trim());

// const email ="andi@gmail.com";
// if (email.includes ("@")){
// console.log( " email Falid")
// } else {
// console.log( "email tidak ditemukan");
// }
// const nama = "Andi";
// console.log(nama.includes("di"));
// console.log(nama.includes("xyz"));

// const kode = "LT-001";
// if (kode.includes("LT-001")){
//   console.log("Barangnya komputer")  
// }else {
//     console.log("barangnya bukan komputer")
// }

// const file ="laporan.pdf";
// console.log(file.endsWith("pdf"))

// const file2 ="laporan.jpg";
// if (file.endsWith("jpg")){
//     console.log("file gambar")
// }
// else if(file.endsWith("pdf")){
//     console.log("File pdf")
// }else if(file.endsWith("docx")){
//     console.log("file dokumen")
// }
// else
//     {console.log ("file tidak didefinisikan")}

// const username = "ShIfA";
// const username2 = username.toLowerCase();
// console.log(username2);


// const namaPelanggan = "   Andi Saputra  ";
// const namaPelanggan2 = namaPelanggan.trim();
// console.log(namaPelanggan2)

// const email = "shifa@gmail.com";
// if (email.includes("shifa")){
//     console.log("Email memenuhi pemeriksaan awal")
// }else {console.log ("email tidak valid")}

// const file = "tugas.docx";
// if (file.endsWith("pdf")){
//     console.log("Dokumen PDF")
// }else if (file.endsWith("jpg")){
//     console.log("file gambar")
// }else if(file.endsWith("docx")){
//     console.log("Dokumen word")
// }else{console.log("jenis file tidak diketahui")}

// const kodeBarang ="EL-001";
// let kategori ;
// if (kodeBarang.includes("EL")){
//     kategori = "elektronik";
// }else if (kodeBarang.includes("MK")){
//     kategori = "makanan";
// }else if (kodeBarang.includes("PK")){
//     kategori = "pakaian"
// }else if (kodeBarang.includes("AT")){
//     kategori = "Alat tulis"
// }else {"kategori tidak dim=temukan"}
// console.log("kategori",kategori)

// const daftarProduk = [
//     {
//         nama: "Laptop",
//         harga: 5000000,
//         stok: 5,
//         kategori: "Elektronik"
//     },
//     {
//         nama: "Buku",
//         harga: 15000,
//         stok: 0,
//         kategori: "Alat Tulis"
//     },
//     {
//         nama: "Mouse",
//         harga: 100000,
//         stok: 10,
//         kategori: "Elektronik"
//     },
//     {
//         nama: "Pensil",
//         harga: 3000,
//         stok: 20,
//         kategori: "Alat Tulis"
//     }
// ];

// daftarProduk.forEach((produk)=> {
//     console.log ("Nama", produk.nama.toUpperCase());
//     console.log("Harga",produk.harga);
//     console.log("stok",produk.stok);
//     console.log("kategori",produk.kategori);

//     if (produk.stok > 0){
//         console.log ("produk tersedia");
//     }else{console.log("produk tidak tersedia")}

//     if (produk.kategori.includes("Elektronik")){
//         console.log("kategori elektronik");
//     }else if (produk.kategori.includes("Alat Tulis")){
// console.log("kategori alat tulis :");
//     }

//     if (produk.harga > 1000000){
//         console.log ("produk mahal");
//     }else{
//         console.log("produk terjangkau")
//     }
// });

// const nama = "Andi";
// if (nama.indexOf("d")!==-1){
//     console.log("huruf ditemukan")
// }else
//     {console.log ("huruf tidak ditemukan")}
// console.log(nama.indexOf("d"), nama.indexOf("i"));
// console.log(nama.indexOf("z"));

// const numby = 2;
// if (numby % 2 === 0){
//     console.log("angka genap")
// }else{"angka ganjil"}

// const nama = "Andi";
// console.log(nama.slice(0,2));

// const namaBarang = "PC-001";
// console.log(namaBarang.slice(3,6))

// const kalimat = "saya belajar java ";
// const hasil = kalimat.replace(
//     "java" , "java script"
// );
// const hasil2 = hasil.replace(
//     "saya", "aku"
// );
// console.log(hasil2)

// const nama = "Andi,Budi,Citra";
// const hasil = nama.split(",");
// console.log(hasil)

// const kalimat = "saya belajar JavaScript";
// const kata = kalimat.split(" ");
// console.log(kata);

// const warna = "merah-kuning-hijau";
// const hasil3 = warna.split("-");
// console.log(hasil3)

// const namaKelompok = [ "Andi", "Citra", "Budi"];
// const joinKelompok = namaKelompok.join("-")
// console.log(joinKelompok)

// const kasus1 = ("aku suka renang");
// const hasil1 = kasus1.replace( "aku", "saya");
// const hasil2 = hasil1.replace( "renang" , "berenang");
// const kasus2 = hasil2.split(" ")
// console.log(kasus2)

// const username = " AdMIN 123 "
// const hasil = username.
// trim().
// toLowerCase();
// console.log(hasil)

// const emailAndi = " ANDI@GMAIL.COM "
// const hasil = emailAndi.trim().toLowerCase();
// console.log(hasil)

const siswa = {
    nama : "aNdI",
    kelas : "x ict",
    email : " ANDI@GMAIL.COM "
};
const { nama , kelas , email} = siswa;
const namaSiswa = nama.trim().toUpperCase()
const kelasSiswa = kelas.trim().toUpperCase()
const emailSiswa = email.trim().toLowerCase()

console.log(`\n nama :${namaSiswa}\n kelas : ${kelasSiswa}\n email: ${emailSiswa}\n`) ;
 memunculkan nama dan email besar kelas kecil dan menghilangkan spasi//

 const siswa = [
    { nama : "Andi" , email : "Andi@gmail.com" , umur : 17},
    { nama : "Budi" , email : "Budi@yahoo.com" , umur : 17},
    { nama : " Citra" , email : "Citra@gmail.com" , umur : 17}
 ]

 const siswa2 = siswa.filter((siswa) => {
return siswa.nama , siswa.email.endsWith("@gmail.com")                    
 })

 const siswa3 = siswa2.map((siswa2) =>{
   return siswa2.nama , siswa2.email
 })
 console.log(siswa3)


  