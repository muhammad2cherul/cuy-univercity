function grupSaklarrk (){
    let toggleRk = document.getElementById('default-toggle-rk');
    
    if (toggleRk.checked == true) {

        lampu1.src = '../asset/images/on.gif';
        lampu2.src = '../asset/images/on.gif';
        lampu3.src = '../asset/images/on.gif';

    } else if (toggleRk.checked == false){

        lampu1.src = '../asset/images/off.gif';
        lampu2.src = '../asset/images/off.gif';
        lampu3.src = '../asset/images/off.gif';

    }
}
function saklarrk( lamp) {

    let toggle1 = document.getElementById('default-toggle1');
    let toggle2 = document.getElementById('default-toggle2');
    let toggle3 = document.getElementById('default-toggle3');
   
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");


    if(toggle1.checked){
        lampu1.src = '../asset/images/on.gif';
    } else {
        lampu1.src = '../asset/images/off.gif';
    }
    if(toggle2.checked){
        lampu2.src = '../asset/images/on.gif';
    } else {
        lampu2.src = '../asset/images/off.gif';
    }
    if(toggle3.checked){
        lampu3.src = '../asset/images/on.gif';
    } else {
        lampu3.src = '../asset/images/off.gif';
    } 
   
    
}

// ruang tamu
function grupSaklarrt (){
    let toggleRt = document.getElementById('default-toggle-rt');
    
    if (toggleRt.checked == true) {

        lampu4.src = '../asset/images/on.gif';
        lampu5.src = '../asset/images/on.gif';
        lampu6.src = '../asset/images/on.gif';
        lampu7.src = '../asset/images/on.gif';
        
    } else if (toggleRt.checked == false){

        lampu4.src = '../asset/images/off.gif';
        lampu5.src = '../asset/images/off.gif';
        lampu6.src = '../asset/images/off.gif';
        lampu7.src = '../asset/images/off.gif';

    }
}

function saklarrt( lamp) {

    let toggle4 = document.getElementById('default-toggle4');
    let toggle5 = document.getElementById('default-toggle5');
    let toggle6 = document.getElementById('default-toggle6');
    let toggle7 = document.getElementById('default-toggle7');
     
    let lampu4 = document.getElementById("lampu4");
    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");
    let lampu7 = document.getElementById("lampu7");

    if(toggle4.checked){
        lampu4.src = '../asset/images/on.gif';
    } else {
        lampu4.src = '../asset/images/off.gif';
    }
    if(toggle5.checked){
        lampu5.src = '../asset/images/on.gif';
    } else {
        lampu5.src = '../asset/images/off.gif';
    }
    if(toggle6.checked){
        lampu6.src = '../asset/images/on.gif';
    } else {
        lampu6.src = '../asset/images/off.gif';
    } 
    if(toggle7.checked){
        lampu7.src = '../asset/images/on.gif';
    } else {
        lampu7.src = '../asset/images/off.gif';
    } 
}
// ruang makan
function grupSaklarrm (){
    let toggleRm = document.getElementById('default-toggle-rm');
    
    if (toggleRm.checked == true) {
        lampu8.src = '../asset/images/on.gif';      
    } else if (toggleRm.checked == false){
        lampu8.src = '../asset/images/off.gif';
    }
}

function saklarrm( lamp ) {

    let toggle8 = document.getElementById('default-toggle8');
      
    let lampu8 = document.getElementById("lampu8");
    
    if(toggle8.checked){
        lampu8.src = '../asset/images/on.gif';
    } else {
        lampu8.src = '../asset/images/off.gif';
    }
    
}

// kamar
function grupSaklark (){
    let toggleK = document.getElementById('default-toggle-k');
    
    if (toggleK.checked == true) {
        lampu9.src = '../asset/images/on.gif';      
        lampu10.src = '../asset/images/on.gif';      
    } else if (toggleK.checked == false){
        lampu9.src = '../asset/images/off.gif';
        lampu10.src = '../asset/images/off.gif';
    }
}
function saklark( lamp ) {

    let toggle9 = document.getElementById('default-toggle9');
    let toggle10 = document.getElementById('default-toggle10');
    
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");
    
    if(toggle9.checked){
        lampu9.src = '../asset/images/on.gif';
    } else {
        lampu9.src = '../asset/images/off.gif';
    }
    if(toggle10.checked){
        lampu10.src = '../asset/images/on.gif';
    } else {
        lampu10.src = '../asset/images/off.gif';
    }
    
}

// sakral rumah
function grupSaklarAll (){
    let toggleall = document.getElementById('default-toggle-all');
    
    if (toggleall.checked == true) {
        lampu1.src = '../asset/images/on.gif';
        lampu2.src = '../asset/images/on.gif';
        lampu3.src = '../asset/images/on.gif';
        lampu4.src = '../asset/images/on.gif';
        lampu5.src = '../asset/images/on.gif';
        lampu6.src = '../asset/images/on.gif';
        lampu7.src = '../asset/images/on.gif';
        lampu8.src = '../asset/images/on.gif';
        lampu9.src = '../asset/images/on.gif';      
        lampu10.src = '../asset/images/on.gif';      
    } else if (toggleall.checked == false){
        lampu2.src = '../asset/images/off.gif';
        lampu3.src = '../asset/images/off.gif';
        lampu4.src = '../asset/images/off.gif';
        lampu5.src = '../asset/images/off.gif';
        lampu6.src = '../asset/images/off.gif';
        lampu7.src = '../asset/images/off.gif';
        lampu1.src = '../asset/images/off.gif';
        lampu8.src = '../asset/images/off.gif';
        lampu9.src = '../asset/images/off.gif';
        lampu10.src = '../asset/images/off.gif';
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