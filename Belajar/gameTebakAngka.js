let play = true;
const kesempatan = 3;
alert('Tebak angka dari 1 - 10\nKamu punya '+ kesempatan + ' kali kesempatan');


while(play){
    const comp = Math.floor(Math.random()*10)+ 1;
    let i = kesempatan;
    for(i; i>0;i--){
        const p = prompt('Kesempatan ke- '+ i);
        let j = i-1;

        if(p == comp){
            alert('Angka yang kamu masukkan : '+ p + '\nSelamat Kamu Benar');
            break;
        }else if (p<com){
            if(j==0){
                alert('gagal');
            }else{
                alert('Terlalu rendah...\nAyo Kamu masih punya'+ j + 'kali kesempatan');
            }
        } else if (p>com){
            if(j==0){
                alert('gagal');
            }else{
                alert('Terlalu tinggi...\nAyo kamu masih punya'+j+"kali kesempatan");
            }
        }
    }
    play = confirm('Main Lagi?');
}