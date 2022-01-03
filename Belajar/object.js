//Object, ada 4 cara:


//Object Literal
let mahasiswa = {           //ini adalah objek untu membuat objek lagsung
    nama : 'Shinta',        //objek berisi properti atau method
    energi : 10,
    makan : function(porsi){            //ini method (function yang ada di dalam objek)
        this.energi += porsi;
        console.log(`Hallo, ${this.nama} selamat makan!` );

    }    
}


let mahasiswa2 = {           //ini adalah objek untu membuat objek lagsung
    nama : 'Shinta',        //objek berisi properti atau method
    energi : 10,
    makan : function(porsi){ //ini method (function yang ada di dalam objek)
        this.energi += porsi;
        console.log(`Hallo, ${this.nama} selamat makan!` );

    }    
}

//let nya gaboleh sama namanya meskipun dalemnya beda 




//Function Declaration
//