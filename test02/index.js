//No. 1

const calcAge = (birthYear, currentYear) => currentYear - birthYear;

console.log(calcAge(1990, 2020));

const yearUntilRetirement = (umur) => {
    let age = calculateAge(umur.1998)
    let retirement = 69 - age;
    if(retirement > 0){
        console.log(umur.firstName + 'retires in' + 'years');
    } else {
        console.log(${firstName} 'is already retired.');
    }
}
yearUntilRetirement();

//No. 2

const addNumber = (a, b, c, d, e, f, g) => {
    let numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        sum += numbers[i];
    }
    return sum;
}

console.log(addNumber(1,2,3,4,5,6,7));

//No. 3

let phi = 3.14;
let power = 2;
let radius = 0;

const calculateArea = (obj) => {
    return phi * Math.pow(obj.radius, obj.power);
};

radius = 21;
let area21 = calculateArea({radius: radius, power: 2});

radius = 7;
let area7 = calculateArea({radius: radius, power: 2});

console.log('area with 21 radius: ${area21} and area with 7 radius: area7');

//No. 4

const makeAjaxRequest = (url, method) => {
    if(!method){
           method = `GET`
    }
    console.log(`${url}, ${method}`);
}

makeAjaxRequest(`www.google.com`);


//////////////////////////Part 2/////////////////////////////

//No. 1

const warnaKesukaan = (warna='biru') => {
    return console.log('Warna kesukaan saya adalah ${warna}');
}
warnaKesukaan('merah');

//No. 2

let buah1 = ['jeruk', 'pisang'];
let buah2 = ['jambu', 'pir'];

let semuaNamaBuah = [...namaBuah1,...namaBuah2];

console.log(semuaNamaBuah);