

//permainan tebak angka 
var lagi = true;
while(lagi){
//Jawaban komputer
var comp = Math.floor(Math.random()*10)+1;



var chance = 3;
while(chance > 0){
    if(chance == 3){
        alert('Selamat datang di permainan tebak angka \nAnda punya 3 kesempatan');
    }else{
        alert('Kamu masih punya '+ chance + 'kesempatan, Ayo coba lagi!');
    }

    //Tebakan pemain
    var p = prompt('Masukkan angka tebakanmu: 1- 10');



    //aturan main
    if (p == comp){
        alert('Kamu BENAR!');
        chance--;
    }else if(p>comp){
        alert('Tebakanmu terlalu tinggi');
        chance--;
    }else{
        alert('Tebakanmu terlalu rendah');
        chance--;
    }
}
alert('Jawabannya adalah '+ comp);
lagi = confirm('Coba Lagi gak weh??')
}


//kita buat code untuk si komputer memilih angka pilihannya, menampilkan alert, si user nebak, jalan aturan mainnya, kemudian tampilkan alert jawaban yang benar dengan vaariabel komputer, lalumintalah confirm untuk bisa menghentikan loop