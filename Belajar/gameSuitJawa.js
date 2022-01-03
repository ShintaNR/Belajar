var tanya = true;
while (tanya){
    //menangkap pilihan player
var p = prompt('pilih: gajah, semut, orang');

//menangkap pilihan komputer
//membangkitkan bilangan random
var comp = Math.random();

if(comp < 0.34){
    comp = 'gajah';
}else if (comp >= 0.34 && comp < 0.67){
    comp = 'orang';
}else{
    comp = 'semut';
}

//menentukana rules
if (p == comp){
    hasil = 'seri';
}else if (p == 'gajah'){
    hasil = (comp == 'orang') ? 'menang' : 'kalah';
}else if(p == orang) {
    hasil = (comp == 'gajah') ? 'kalah' : 'menang';
}else if (comp == 'semut'){
    hasil = (comp == 'gajah') ? 'menang' : 'kalah';
}else{
    hasil = 'Anda memasukkan pilihan yang salah '
}



//tampilkan hasilnya
alert('Kamu memilih : '+ p + 'dan Komputer memilih: '+ comp + '\n Maka hasilnya : Kamu ' + hasil);

tanya = confirm('lagi??')


}


//membangkitkan bilangan random dari 1 sampai 10 dikasih kesempatan 3 kali