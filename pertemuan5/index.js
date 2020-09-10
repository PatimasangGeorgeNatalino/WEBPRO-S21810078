/* 
1. Array
*/
//Deklrasi Array
// let angka = [1, 2, 3, 4, 5, 6, 7, 8,];
// console.log(angka);
// let buah = ["Pepaya", "Semangka", "Pir"]
// console.log(buah);

// let arr = ["text", 1, true];
// console.log(arr);

// let myFunc = function(){
//     return "Hello Array";
// };

// let arr2 =["text", 1,true, myFunc(), [1, 2, 3, 4, 5, 6]];
// //mengakses elemen dalam array
// console.log(arr2[2]);
// console.log(arr2[3]);
// console.log(arr2[4][2]);

// console.log(typeof arr2);
// console.log(arr2.length);

//Manipulasi Array
//1. Menambah isi Array

// let mhs = [];
// mhs[0] = "John";
// mhs[1] = "Bob";
// mhs[2] = "Jane";

// console.log(mhs);

//2. Mengubah isi array
// mhs[1] = "Donny";
// console.log(mhs);

 //3.Menghapus isi Array
// mhs[2] = undefined;

//4. Menampilkan isi Array
// let mhs = ["Frizca", "Jesslyn", "Cindy", "Carly"]


// for (let i=0; i<4; i++){
//     console.log("Mahasiswa ke-" + (i+i) + " adalah ")
// }

//Method dalam Array
//1. lenght
//2. toString
// let mhs = ["Frizca", "Jesslyn", "Cindy", "Carly"];
// console.log(mhs.toString());
//3. join
// console.log(mhs.join)(" - ");
//4. push,pop, unshift, shift
// mhs.push("Mayra");
// mhs.push("Stenly");
// console.log(mhs.join(" - "));
// mhs.pop();
// mhs.pop();
// console.log(mhs.join(" - "));

// mhs.unshift("Stenly");
// mhs.unshift("Mayra");
// console.log(mhs.join(" - "));
// mhs.shift();
// mhs.shift();
// console.log(mhs.join(" - "));

//5. concat
// let buah = ["Mangga", "Apel", "Anggur"];
// let sayur = ["Kangkung", "bayam", "Buncis"];

// let makanan = sayur.concat(buah);
// console.log(makanan);

//6. Splice and Slice 
//a. Splice

// let buah = ["Pisang", "Mangga", "Apel", "Jeruk"];
// buah.splice(2, 0, "Melon", "Semangka");
// console.log(buah.join(" - "));

// //b. Slice
// let buah2 = buah.slice(0, 3);
// console.log(buah2.join(" - "))

//7. forEach dan Map
//a. forEach

// let angka = [1, 2, 3, 4, 5, 6, 7, 8];

// let tampilAngka = function (el) {
//     console.log(el)
// };
// // angka.forEach(tampilAngka);

// //b.Map
// let angka2 = angka.map(function (el) 
// {
//     return el;
// });

// console.log(angka2)

//8. sory
// let angka = [1, 2, 5, 3, 7, 8];
// let mhs = ["John", "Bob", "Erick"];
// mhs.sort();
// console.log(mhs)
// angka.sort(function (a ,b ) {
//     return a - b;
// });
// console.log(angka);

//9. filter
let angka = [1, 100, 2, 20, 5, 3, 7, 8];

let angka2 = angka.filter(function (el)
{
    return el > 5;
})
console.log(angka2);