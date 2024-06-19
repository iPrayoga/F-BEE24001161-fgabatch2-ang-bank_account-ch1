// CHALLENGE CHAPTER 1!


let saldo = 0;

function tampilkanSaldo() {
    alert("Saldo saat ini: " + saldo);
}



function tambahSaldo() {
    let jumlah = parseFloat(window.prompt("Masukkan jumlah yang ingin ditambahkan:"));
    if (!isNaN(jumlah) && jumlah > 0) {
        saldo += jumlah;
        alert("Saldo berhasil ditambahkan. Saldo baru: " + saldo);
        tampilkanSaldo();
    } else {
        alert("Input tidak valid. Mohon masukkan angka yang valid.");
    }
}

function kurangiSaldo() {
    let jumlah = parseFloat(window.prompt("Masukkan jumlah yang ingin dikurangi:"));
    if (!isNaN(jumlah) && jumlah > 0 && jumlah <= saldo) {
        saldo -= jumlah;
        alert("Saldo berhasil dikurangi. Saldo baru: " + saldo);
        tampilkanSaldo();
    } else if (jumlah > saldo) {
        alert("Saldo tidak mencukupi. Saldo saat ini: " + saldo);
    } else {
        alert("Input tidak valid. Mohon masukkan angka yang valid.");
    }
}



tambahSaldo();
kurangiSaldo();