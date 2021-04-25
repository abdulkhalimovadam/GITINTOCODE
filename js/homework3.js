//console.log("НАЧАЛО КОДА");
//let a = +prompt("a");
//let b = +prompt("b");

//if (a>b) {
//    console.log ("доп код");
//}

//console.log ("cod contined");


/* Если кол-во денег больше 5т, покупаем товар и выходим из магазина. Иначе 
выходим из магазина*/
//let cash = 12;
//if (cash > 5000) {
//  console.log("покупаем дорогую вещь");
//} else {
//console.log ("покупаем дешевую")
//}
//let a = +prompt('a');
//let b = +prompt('b');

//if ( a < b ) {
//    console.log (a);
//} else {
//    console.log (b);
//}
/*let userlogin = prompt('login')
let userpass = prompt('pass')
let login = 'Admin'
let pass = 'qwerty'

if (userlogin === login) {
    if (userpass === pass){
    console.log ("Welcome");
    } else {
        console.log ("неверный пароль")
    }
    
} else {
    console.log ('error');
} или можно сократить*/


/*let userlogin = prompt('login')
let userpass = prompt('pass')
let login = 'Admin'
let pass = 'qwerty'

if ( userlogin === login && userpass === pass) {
    console.log ("welcome")
} else {
    console.log ("Неверный логин или пароль!")
}*/
/*let a = 20;
let b = 3222222222222220;
let c = 4233232332320;
if (a > b && a > C) {
    console.log(a);
} else if (b > c) {
    console.log (b);
} else { 
    console.log (c)
}*/

//function hello () {
//    console.log ("hello World")
//};
//hello();






//HOMEWORK

// --- 1 WORK
/*const a = prompt("ВАШЕ ЧИСЛО");
if (a < 10) {
    console.log ("константа меньше 10")
} else {
    console.log ("константа не меньше 10")
}*/
// --- 2 work
/*let text = prompt ("text")
let lorem = "lorem"
if (text == lorem){
    console.log ("У вас ошибка в тексте")
}else {
    console.log ("Содержимое переменной: alvi hello")
}*/
// --- 3 work
/*let comment  = "Создать переменную comment с произвольным текстом. Если текст больше 120 символов, вывести в консоль сообщение «Текст слишком длинный. В нем ## символов» (вместо решеток кол-во) символов. Иначе, вывести текст в консоль. ***(Для этого задания нужно самостоятельно узнать как получить кол-во символов текста)";
if (comment.length> 120) {
    console.log(`Текст слишком длинный. В нем ${comment.length} символов`)
} else {
    console.log (comment)
    
}*/
 
let CartSum = 3300;

let sale = CartSum * 15 / 100;

if (CartSum >= 5000) {
    console.log (`Ваша скидка 15%. Итого: ${sale}. Доставка бесплатно`)
} else {
    console.log(`Итого к оплате:${CartSum}. До скидки осталось:${5000 - CartSum}.`)
}
