let dog = 'меняется';
const myNAme = 'не меняется';
var my_name = 'о нет нинида';

dog = 'klklkklllklkljkjikjijhoihjkhkhjhjkhuihjkkhjkgjhfgyjgjhgjfgjhfgjjhi';

console.log(dog , myNAme , my_name);

let name = 'Никита';
let age = 12;
const school = 'Гимназия';
let pr = true;
console.log(name , age ,school ,pr);
console.log(typeof name , typeof age ,typeof school ,typeof pr);

// let ager = prompt('how old are you')

// if (ager >= 15){
//     alert('ну всё иди')
// } else if (ager > 10 ){
//     alert('я подумаю')
//     alert('я подумаю')
//     alert('лан иди')
// } else {
//     alert('нет')
// }
// if (ager >= 15){
//     alert('ну всё иди')
//     let u = prompt('...,я гей ; a да b нет')
//     if (u = a){
//     alert('(:')
// } else if (u = b){
//     alert('(:')
// }
// } else if (ager >= 12 ){
//     alert('мало')
//     alert('я подумаю')
//     alert('лан иди')
//     let u = prompt('...,я гей ; a да b нет')
//     if (u = a){
//     alert('(:')
// } else if (u = b){
//     alert('(:')
// }
// } else {
//     alert('нет малой')
// }




let first = prompt('Введите первое число')
let second = prompt('Первое введёное число: ' + first + 'Введите второе число ')
let chose = prompt(' Первое: ' + first + ' Второе: ' + second + '1+ ,2* ,3/ ,4- ,5 степень ,6 корень первого числа ,7/ с ост')
let u = Number(first)
let p = Number(second)
let res = u + p
let res1 = u * p
let res2 = u / p
let res3 = u - p
let res4 = Math.pow(u, p)
let res5 = Math.sqrt(u)
let res6 = u % p
let res7 = u - res6
let res8 = res7 / p
if(chose === 1){
    alert('сложение '+ first + '+' + second + '=' + res)
} else if(chose === 2){
    alert('умножение '+ first + '*' + second + '=' + res1)
} else if(chose ===3){
    alert('деление '+ first + '/' + second + '=' + res2)
} else if(chose === 4){
    alert('вычитание '+ first + '-' + second + '=' + res3)
}   else if(chose === 5){
    alert('степень '+ first + 'в степени' + second + '=' + res4)
} else if(chose === 6){
    alert('корень '+ 'корень' + first  + '=' + res5)
} else if(chose === 7){
    alert('дел с ост '+ first + '/' + second + '=' + res8+ ' (' + res6 + ')')
}

