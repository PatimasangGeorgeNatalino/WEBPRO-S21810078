/* Desturisasi Array */

// --- Old way ---
// let buah = ["mangga", "jeruk", "apel"];

// let buah1 = buah[0];
// let buah2 = buah[1];
// let buah3 = buah[2];

// console.log(buah1); // Output: mangga
// console.log(buah2); // Output: jeruk
// console.log(buah3); // Output: apel
// console.log(hitung(1, 2, 3, 4, 5, 6, 7));

// --- New way ---
// let buah = ["apel", "mangga", "jeruk"];

// lakukan destrukturisasi array
// let [buah1, buah2, buah3] = buah;

// console.log(buah1); // Output: apel
// console.log(buah2); // Output: sirsak
// console.log(buah3); // Output: pir

//Contoh Desktrkturisasi Array ES6
// let[firstName, , lastName, , Hobby] = ["George","N","Patimasang","Cycling","Refreshing"]
// console.log(firstName);
// console.log(lastName);
// console.log(Hobby);

// Cara menukar 2 variable atau lebih
// --------- Cara Lama --------------
// let a = 10;
// let b = 15;

// variabel tambahan sementara
// let temp = a;
// a = b; // nilai a sekarang adalah 15
// b = temp; // nilai b sekarang adalah 10

// ------------ Cara Baru ------------
// let a = 10;
// let b = 15

// [a,b] = [b,a];
// nilai a sekarang adalah 15, dan nilai b adalah 10

// Destrukturisasi Objek
// -------- Cara Lama --------------
// let orang = {
//   nama: "James",
//   umur: 19,
//   sudahMenikah: false
// };

// let nama = orang.nama;
// let umur = orang.umur;
// let sudahMenikah = orang.sudahMenikah;

// console.log(nama); // Output: James
// console.log(umur); // Output: 26
// console.log(sudahMenikah); // Output: false

//--------- Cara Baru ---------
// let orang = {
//   nama: "James",
//   umur: 26,
//   sudahMenikah: false
// };

// Destrukturisasi Objek
// let { nama, umur, statusMenikah } = orang;

// console.log(nama); // Output: James
// console.log(umur); // Output: 26
// console.log(statusMenikah); // Output: undefined karena nama variabel dan properti berbeda

//Jika nama variablenya berbeda dengan nama properti :
// let {
//   namaProperti1: namaVariabelBaru1,
//   namaProperti2: namaVariabelBaru2
// } = namaObjek;

//CONTOH
// let orang = {
//   name: "James",
//   age: 26,
// };

// buat variabel nama berisi nilai dari properti name pada orang
// buat variabel age berisi nilai dari properti umur pada orang
// let { name: nama, age: umur } = orang;

// console.log(nama); // Output: James
// console.log(umur); // Output: 26

// DESKTRUKTURISASI OBJEK BERTINGKAT
// Contoh:
let murid = {
    kelas: "10d",
    nama: ["Angel", "Belinda", "Carly"],
    prestasi: {
      olahraga: "juara 1",
      akademik: "juara 3"
    }
  };
  
  let {
    prestasi: { olahraga }
  } = murid;
  
  console.log(olahraga); // Output: juara 1