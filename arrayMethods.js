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


const siswa =[
    {nama : "Andi" , nilai : 80},
    {nama : "Budi" , nilai : 65},
    {nama : "citra" , nilai : 90},
    {nama : "Dina" , nilai : 75},
    {nama : "Eko" , nilai : 85},
];

siswa.forEach((siswa) => {
    if (siswa.nilai >=75){
        console.log(siswa.nama + " - " + siswa.nilai + " - Lulus");
    }else {
        console.log (siswa.nama + " - " + siswa.nilai + " - Remidial");
    }
});