// console.log("nama saya sylvester");
// console.log("nama saya sylvester");
// console.log("nama saya sylvester");
// console.log("nama saya sylvester");

// for(let i =2; i < 12; i++){
//     // i++ akan menambah nilai i sebanyak 1 setiap kali perulangan
//      console.log("nama saya sylvester")
// }

// for(let z = 5; z<8; z++){
//     let i = 51; i<=60;i++
//     console.log("nama saya sylvester")

// }

// for(let i= 5; i>=0; i--){
//     console.log(i)
// }

// for(let i = 11;i<=20;i+=2){
//     console.log(i)
// }

// for(let i = 1; i <= 10; i++){
//     console.log(i , "x" , 1 , "=" , (i*1));
// }

// let total = 0;
// for (let i = 1; i <= 5; i++){
//     total = total + i;
//     console.log(`i=${i} -> total=${total}`);
// }

// let total = 0;
// for (let i = 10; i <= 20; i+=2){
//     total = total + i;
//     console.log(`i=${i} -> total=${total}`);
// }

// let nama = ["Andi", "Budi", "Citra", "Doni" , "Sunghoon", "Sylvester", "Jake" , "Kyla", "Kelish", "Amy"];
// for (let i = 0; i < nama.length; i++){
//     console.log( `${i+1}.`,nama[i]);
// }

// let nilai =[80 , 65, 90, 55, 75];
// for(let i = 0; i < nilai.length; i++ )
//     if (nilai[i] >=90){
//         console.log( "Nilainya" + nilai[i]+ " = SANGAT BAGUSS");
//     }else if (nilai[i] >= 80){
//         console.log("Nilainya" + nilai[i] +  " = BAGUSSS");
//     }  else {
//         console.log("Nilainya" + nilai[i] + " =  cukup");
//     }

// let nama = ["Andi" , "Budi" , "citra" , "Doni" , "Eka"];
// let nilai = [85 , 60 , 90 , 72, 45];
// for (let i = 0; i < nilai.length; i++)
//     if (nilai [i] >=80){
//     console.log(nama[i] + "-"  + nilai[i] + "= LULUS");
// }else console.log(nama[i] + "-" + nilai[i] + " = TIDAK LULUS");

// let angka = [12, 7, 20, 15, 8, 3, 14, 9];
// for (let i = 0; i < angka.length; i++){
// if(angka [i] % 2 === 0 && angka[i] >=10){
//     console.log( angka [i]+ "-" +"Genap" + "-"+ ">=10" );
//  } else if (angka [i]% 2 === 0 % angka [i] < 10){
//    console.log (angka[i] +"-" + "Genap" + "-" + "< 10");
//  } else if (angka [i]% 2 === 0 % angka [i] >= 10){
//    console.log (angka[i] +"-" + "Ganjil" + "-" + "< 10");
//  }
//  else{
//     console.log(angka[i] +"-"+ "Ganjil" + "-"+ "<=10");
//  }
// }

// let angka = [12, 7, 20, 15, 8, 3, 14,9];
// for (let i = 0; i < angka.length; i++){
// if(angka[i] % 2===0 && angka [i] >=10){
//     console.log(angka [i]+ "-" +"genap" + " - " + ">=10");
//  }else if(angka[i]% 2 === 0 && angka[i] < 10){
//     console.log (angka[i] + "-" + "genap" + " - " + ">=10")
//  } else if(angka[i]% 2 === 0 && angka[i] > 10){
//     console.log (angka[i] + "-" + "ganjil" + " - " + "<=10")
//  } else {
//     console.log(angka[i] +"-"  + "Ganjil" + " - " + "<=10");
//  }
// }
 
const daftarProduk = [
   { nama : "Buku tulis" , harga : 35000 , stok : 15 },
    { nama : "pulpen Hitam" , harga : 15000 , stok : 0 },
    { nama : "Tas Ransel" , harga : 150000 , stok : 5 },
    { nama : "Pensil warna" , harga : 45000 , stok : 10},
    { nama : "Kotak pensil" , harga : 25000 , stok : 0 },
    { nama : "penggaris" , harga : 10000 , stok : 50 },
   
]

const produkRekomendasi = daftarProduk.filter((produk) => produk.harga < 50000 && produk.stok > 0)
console.log ("Tersedia")

produkRekomendasi.forEach ((produk) => {
console.log ( produk.nama + "(Harga : Rp" + produk.harga + ", stok:" + produk.stok + ")");
})

 


 


