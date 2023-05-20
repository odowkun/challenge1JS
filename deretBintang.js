function deret(n) {
    // perulangan deret sampai ke-N
    for (let i = 1; i <= n; i++) {
        let baris = '';
        // cek dan menampilkan angka sebelum **
        for (let j = 1; j <= n; j++) {
            if (j <= i) {
                baris += j;
            }
        }
        // menambahkan deret **
        baris += '**';
        //menampilkann baris dibelakang **
        for (let j = i + 1; j <= n; j++) {
            baris += (j + 2);
            if (j == n) {
                baris += (j + 3);
            }
        }
        if ((i + 1) > n) {
            baris += (i + 3);
        }
        // menampilkan baris
        console.log(baris);
    }
}

// Panggil fungsi
const nilai1 = 5;
console.log('input n =', nilai1);
deret(nilai1);

const nilai2 = 4;
console.log('input n =', nilai2);
deret(nilai2);