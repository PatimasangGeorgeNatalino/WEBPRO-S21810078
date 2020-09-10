//Java script conditional

/* 1. Menggunakan if, else if dan else
let hargaBuah = 10000;
if (hargaBuah > 8000){
    console.log("Mahal");
} else if (hargaBuah >= 5000 %% hargaBuah <= 8000) {
    console.log("Normal");
} else {
    console.log("Murah");
}
*/

/* 2. Menggunakan Swtich dan Case
let kegiatan;
let waktu = "Pagi";
switch (waktu){
    case "Pagi":
        kegiatan = "Berolahraga";
        break;
    case "Siang":
        kegiatan = "Membersihkan rumah";
        break;
    case "Malam":
        kegiatan = "Tidur";
        break;
    default:
        kegiatan = "Tidak ada kegiatan";
}
console.log(kegiatan);
*/

// Javascript Loop

/* cara biasa
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
*/

/* Loop menggunakan For 
for(let i = 1; i <= 5; i++{
    console.log(i);
});
*/

/* For/in Loop
const lagu = {
    Judul : "Take on Me",
    Penyanyi : "a-Ha",
    Tahun : 1986
};
for (x in lagu) {
    console.log(x, ':', lagu[x]);
}
*/

/* For/of Loop
const lagu = ["Orange", 
    "Again", 
    "silhouette", 
    "one only"
];
for (x of lagu){
    console.log(x);
}
*/


/*While Loop 
let x = 0;
while(x <= 10) {
    console.log(x)
    x++;
}
*/

/*Do While Loop
let i = 0;
do{
    console.log(i);
    i++;
} while ( i <= 10);
*/