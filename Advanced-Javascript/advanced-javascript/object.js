 //4 cara membuat object
 //object isinya properti dengan method

 //1. Object Literal 

//   let fauna = { //objek
//       family : 'Felidae',
//       species : 'Panthera tigris',
//       Populasi : 78,
//       migrasi : function (jumlahMigrasi){
//           this.Populasi = this.Populasi + jumlahMigrasi;
//           console.log (`Jumlah populasi ${this.species} sekarang adalah ${this.Populasi}`)
//       }
//       }
      
//       let fauna2 = { //objek
//         family : 'Felidae',
//         species : 'Panthera tigris',
//         Populasi : 78,
//         migrasi : function (jumlahMigrasi){
//             this.Populasi = this.Populasi + jumlahMigrasi;
//             console.log (`Jumlah populasi ${this.species} sekarang adalah ${this.Populasi}`)
//         }
//         }
        

//         let handphone = {
//             jenis : 'sungsang S30',
//             stock : 45,
//             produksi : function(buat){
//                 this.stock = this.stock + buat;
//                 console.log( `${this.jenis} yang diproduksi pada tahun lalu adalah ${this.stock}`);

               
//             }
//         }
        
//         if(stock <= 20){
//             console.log ('produksi sedang dalam masalah');
//         }else if (stock <= 45) {
//             console.log('produksi berjalan normal');
//         }else {
//             console.log('pabrik sedang lembur');
        
//         }




// 2. function declaration
// function Fauna (jenis, populasi){
//     let fauna =  {};
//     fauna.jenis = jenis;
//     fauna.populasi = populasi;

//     fauna.migrasi = function(jumlahMigrasi){
//         this.populasi += jumlahMigrasi;
//         console.log (`Jumlah populasi ${this.species} sekarang adalah ${this.Populasi}`)
//     }

//     fauna.mati = function(mati){
//         this.populasi -= mati;
//         console.log(`Jumlah ${this.jenis} yang tersisa adalah ${this.populasi}`);
//     }

//  return fauna;   
// }

// let kucing = Fauna ('kucing', 16);
// let harimau = Fauna ('harimau', 89);
        


// function Terjual (jenis, jumlahTerjual){
//     let terjual = {};
//     terjual.jenis = jenis;
//     terjual.jumlahTerjual = jumlahTerjual;

//     terjual.eceran = function(totalTerjual){
//         this.jumlahTerjual += totalTerjual;
//         console.log (`Penjualan ${this.jenis} pada bulan Januari mencapai ${this.jumlahTerjual} lusin `);
//     }

//     return terjual;

// }
// let mangkok = Terjual ('mangkok', 12);
// let piring = Terjual ('piring', 11);





//   3. constructor function
//   tidak perlu mendeklarasikan variabel dan tidak perlu menggunakan return 

//   function Fauna (jenis, populasi){
//     // let fauna =  {};
//     this.jenis = jenis;
//     this.populasi = populasi;

//     this.migrasi = function(jumlahMigrasi){
//         this.populasi += jumlahMigrasi;
//         console.log (`Jumlah populasi ${this.species} sekarang adalah ${this.Populasi}`)
//     }

//     this.mati = function(mati){
//         this.populasi -= mati;
//         console.log(`Jumlah ${this.jenis} yang tersisa adalah ${this.populasi}`);
//     }
// }

// let kucing = new Fauna ('kucing', 16);
// let harimau = new Fauna ('harimau', 89);


// function Terjual (jenis, jumlahTerjual){
//     this.jenis = jenis;
//     this.jumlahTerjual = jumlahTerjual;

//     this.laku = function (totalTerjual){
//         this.jumlahTerjual += totalTerjual;
//         console.log(`Penjualan ${this.jenis} pada bulan Januari mencapai ${this.jumlahTerjual}`);
//     }

//     this.pecah = function (pecah){
//         this.jumlahTerjual += pecah;
//         console.log(`Penjualan berkurang karena ${this.jenis} mengalami kerusaka sebanya ${this.pecah} dan jumlah total sekarang adalah ${this.jumlahTerjual}`);
//     }
// }
// let gelas = new Terjual ('gelas', 13);




//problem object literal adalah tidak efektif karena mamakan banyak resource untuk object yang banyak.
//function declaration saat melakukan instansiasi tetep dibuat duplikastnya pada masing-masing object








































