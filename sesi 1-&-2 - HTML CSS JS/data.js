const nama = "Muhammad Dwi";
let usia = 32;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata(){
    let generasi;
    if(usia >10 && usia < 18) {
        generasi = 'Generasi Remaja';
    } else if (usia <= 2) {
        generasi = 'Generasi Bayi';
    } else if (usia <= 10) {
        generasi = 'gen Anak-anak';
    } else if (usia > 40) {
        generasi = ' gen orang tua'
    } else {
        generasi = 'generasi dewasa';    
    }
        
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();


// cara menampilkan console.log beberapa type data dalam satu baris sevara sederhana

// console.log(`Nama saya adalah ${nama} dan usia saya ${usia} tahun`);