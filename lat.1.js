function tambah() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let tambah = num1+num2;
    document.getElementById("hasil").innerHTML = tambah;
}

function kurang() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let kurang = num1-num2;
    document.getElementById("hasil").innerHTML = kurang;
}

function bagi() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let bagi = num1/num2;
    document.getElementById("hasil").innerHTML = bagi;
}

function kali() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let kali = num1*num2;
    document.getElementById("hasil").innerHTML = kali;
}