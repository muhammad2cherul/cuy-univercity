function grupSaklar (){
    let toggle4 = document.getElementById('default-toggle4');
    
    if (toggle4.checked == true) {

        lampu1.src = 'asset/images/on.gif';
        lampu2.src = 'asset/images/on.gif';
        lampu3.src = 'asset/images/on.gif';

    } else if (toggle4.checked == false){

        lampu1.src = 'asset/images/off.gif';
        lampu2.src = 'asset/images/off.gif';
        lampu3.src = 'asset/images/off.gif';

    }
}

function saklar( lamp) {

    let toggle1 = document.getElementById('default-toggle1');
    let toggle2 = document.getElementById('default-toggle2');
    let toggle3 = document.getElementById('default-toggle3');
    // console.log('testing', toggle.checked); 
     
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");


    if(toggle1.checked){
        lampu1.src = 'asset/images/on.gif';
    } else {
        lampu1.src = 'asset/images/off.gif';
    }
    if(toggle2.checked){
        lampu2.src = 'asset/images/on.gif';
    } else {
        lampu2.src = 'asset/images/off.gif';
    }
    if(toggle3.checked){
        lampu3.src = 'asset/images/on.gif';
    } else {
        lampu3.src = 'asset/images/off.gif';
    } 
   
    
}


// // tugas

// // tugas bikin 10 lampu 
// // nuat lima grup lampu : 
// // ruang keluarga  3
// // ruang tidur 2
// // ruang makan 1
// // ruang tamu 4

// // perbagus dekorasi dan ada tombol lampu dan tombol ruangan