// const siswa = {
//     nama : "aNdI",
//     kelas : "x ict",
//     email : " ANDI@GMAIL.COM "
// };
// const { nama , kelas , email} = siswa;
// const namaSiswa = nama.trim().toUpperCase()
// const kelasSiswa = kelas.trim().toUpperCase()
// const emailSiswa = email.trim().toLowerCase()

// console.log(`\n nama :${namaSiswa}\n kelas : ${kelasSiswa}\n email: ${emailSiswa}\n`) ;


//  const siswa = [
//     { nama : "Andi" , email : "Andi@gmail.com" , umur : 17},
//     { nama : "Budi" , email : "Budi@yahoo.com" , umur : 17},
//     { nama : " Citra" , email : "Citra@gmail.com" , umur : 17}
//  ]

//  const siswa2 = siswa.filter((siswa) => {
// return siswa.nama , siswa.email.endsWith("@gmail.com")                    
//  })

//  const siswa3 = siswa2.map((siswa2) =>{
//    return siswa2.nama , siswa2.email
//  })
//  console.log(siswa3)

// const siswa = [
//   {nama : "dzaki" , umur : 16},
//   {nama : "zulfi" , umur : 17},
//   {nama : "fahri" , umur : 15}
// ]
// console.log(siswa[0].nama , siswa[2].umur)

const barang = [
  {kode : "kb-001",
   nama : "keyboard mechanical",
   harga : 450000
  },
  {kode : "ms-002",
   nama : "mouse gaming",
   harga : 250000
  },
  {kode : "hs-003",
   nama : "headset",
   harga : 350000

  }

];

const nama = "mouse gaming";
const harga = 250000;
const jumlah = 7;

const totalHarga = harga * jumlah;
let diskon;

if (jumlah >=5){
  diskon = 10;
}
else {
  diskon = 0
}
const potongan = totalHarga * diskon/100;
const totalBayar = totalHarga - potongan;


console.log("total harga :", totalHarga);
