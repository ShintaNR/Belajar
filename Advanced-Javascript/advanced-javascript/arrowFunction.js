// function declaration

function tampilPesan (nama){ //parameter: nama, nama function : tampilPesan, argumen: Shinta
    alert ('halo' + nama);   
}
tampilPesan ('Shinta');


//function expression
let tampilPesan = function (nama){
    alert('halo'+ nama);
}
tampilPesan ('Shinta');


//Arrow function adalah bentuk yang lebih ringkas dari function ekspression
let tampilPesan = (nama) => {
    alert('halo'+ nama);
}
tampilPesan ('Shinta');


// const tampilNama = (nama) => {return `Hallo, ${nama}`;}
// console.log('Shinta Nurrohmah')

const tampilNama = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`;
}
console.log('Shinta Nurrohmah')

//implisit return
const tampilNama = nama => `Halo, ${nama}`;
console.log ('Shinta Nurrohmah')


//tanpa parameter
const tampilNama = () => `Helo world`;
console.log (tampilNama());
