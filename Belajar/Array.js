//Array adalah tipe data yang digunakan untuk mendesktipsikan variabel dengan tiap elemennya memunyai indeks
//array adalah sebuah variabel yang lebih sakti karena bisa menampung lebih dari satu nilai 


var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

//kenapa Array
    //Mempermudah pengelolaan nilai/value/data (penelusuran atau pencarian)
    //efektifitas manajemen memori

//Karakteristik Array (variabel yang mempunyai banyak elemen dan dipicu dengan nilai yang sama)
    //kumpulan pasangan key dan nilai
    //indeks dari 0
    //array pada js ini bertipe object
    //memiliki fungsi method length unntuk menghitung jumlah eemen di dalamnya
    //elemen pada array boleh memiliki tipe data yang berbeda


    function myFunc(){

    }

var bulan1 = [];
bulan1 = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

console.log(bulan[12]);

//untuk melihat tipedata maka bisa menggunakan
console.log(typeof('Januari'));

//untuk melihat berapa data yang ada di dalam array
console.log(bulan1.length);

//Elemen pada array bolelh memiliki tipe data yang berbeda 
var contoh = ['Aku', 150, true, myFunc, [2,3,4]];
//cara menamilkna angka 4 di konsol
console.log(contoh[4][2]);




//Manupulasi Array

//menambah elemen pada Array
var kue = ['donat', 1000, true];
console.log(kue);


// var kue = [];
// kue[0] = 'Donat';
// kue[1] = 'Lapis';
// kue[2] = 'Serabi';
// console.log(kue[2]);

var sayur = ['Kangkung', 'Bayam', 'Selada'];
sayur [1] = 'Kacang panjang';
console.log(sayur);



//Menampilkan isi array
for (var i = 0; i < sayur.length; i++){

  console.log('Saya suka makan sayur '+ sayur[i]);  
}

//Method pada JS yang khusus untuk array
// length = mengetahui jumlah elemen
//join = method yang menggabungkan seluruh isi array dan mengubahnya menjadi sebuahstring

//join
var kue = ['donat', 1000, true];
console.log(kue.join('-'));

//Push dan Pop
//push untuk menambah elemen array diakhir array
kue.push('Shinta');
kue.push('Eren', 'Armin', 'Erwin');
console.log(kue.join ('-'))


    //pop menghilangkan elemen terakhir
    kue.pop();
    kue.pop();
    kue.pop();
    console.log(kue.join ('-'))


//Unshift dan shift
//Bekerja untuk elemen pertama
   kue.unshift('Mikasa');
   kue.unshift('Shandy');
   console.log(kue.join('-')) ;

   kue.shift();
   console.log(kue.join('-')) ;


   var nama = ['Jonathan', 'Siahaan', 'Bunaya'];
   //splice
   //splice(indexAwal, mauDihapusBerapa) 
    nama.splice(1, 2, 'Deniel', 'Cakra', 'Manunggaling');
    console.log(nama.join('-'));




    //slice(awal, akhir) inddeks awal akan terbawa tapi indeks akhir tidak atau dalam artian mengiris array atau memindahkan elemen ke array baru. Array kama masih bisa diakses 
    var nama = ['Jonathan', 'Siahaan', 'Bunaya', 'Deniel', 'Cakra', 'Manunggaling'];

    var nama2 = nama.slice(0,5);
    console.log(nama2.join('-'));


    //foreach
    var angka = [1,2,3,4,5,6,7,8,9];
    var nama = ['Jonathan', 'Siahaan', 'Bunaya', 'Deniel', 'Cakra', 'Manunggaling'];

        // //for biasa
        // for (var i = 0; i<angka.length; i++){
        //     console.log(angka[i]);

        // }

//    angka.forEach(function(e) {
//     console.log(e);
//    });

    nama.forEach(function(e, i){
        console.log('Mahasiswa ke-'+ (i+1)+ ' adalah : '+ e);
    });
   



//Map (mengembalikan nilai array)
    var angka = [2,3,4,1,4,7,9,6,8];
    var angka2 = angka.map(function(e){
        return e * 10;
    })
    console.log(angka2.join('-'));


//sort
var angka = [2,3,4,1,4,7,9,16,8];
angka.sort();
console.log(angka.join('-'));
     
var angka = [2,3,4,16,4,7,9,6,8];
angka.sort(function(a, b){
    return b-a;
});
console.log(angka.join('-'));


//filter
var angka = [1,2,3,4,5,7,8,9,6];
var angka2 = angka.filter(function(x){
    return x > 8;
});
console.log(angka2);
   

//find
var angka = [1,2,3,4,5,7,8,9,6];
var angka2 = angka.find(function(x){
    return x > 7;
});
console.log(angka2);