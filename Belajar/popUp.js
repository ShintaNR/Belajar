var tes = confirm('kamu yakin???');
if(tes ===true){
    alert('user menekan ok');
}else{
    alert('user menekan CANCEL')
}


alert('SELAMAT DATANG!');
var lagi = true;
while (lagi){
    var nama = prompt('masukkan nama: ');
    alert('halo ' + nama);
    
    lagi = confirm('coba lagi?');
}
alert ('terima kasih');
