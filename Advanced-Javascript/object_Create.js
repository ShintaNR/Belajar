const methodFauna = {

    migrasi : function(jumlahMigrasi){
        this.populasi += jumlahMigrasi;
        console.log (`Jumlah populasi ${this.species} sekarang adalah ${this.Populasi}`)
    }

    berkurang : function(mati){
        this.populasi -= mati;
        console.log(`Jumlah ${this.jenis} yang tersisa adalah ${this.populasi}`);
    }
}

function Fauna (jenis, populasi){
let fauna =  Object.create(methodFauna);
    fauna.jenis = jenis;
    fauna.populasi = populasi;
    fauna.migrasi = methodFauna.migrasi;
    fauna.mati = methodFauna.berkurang;
    

 return fauna;   
}

let kucing = Fauna ('kucing', 16);
let harimau = Fauna ('harimau', 89);