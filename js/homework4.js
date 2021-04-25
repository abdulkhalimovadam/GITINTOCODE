//function hello (name =" name ", age = "age" ) {
//    console.log (`hello ${name}! i am adam ${age}` )
//};

//hello('lorem');

//let a = Math.min (2 , 3);
//console.log (a)


/*function f (){
    return "LOREM";
}
 let a = f()
 console.log ( f())*/


 /*function converter(rub) {
     let course = 75;
     return rub / course;
 }
 let a = converter (prompt("введите сумму"));
 console.log(a);*/
  
 /*function f (){
     return 1;
     return 2;
     return 3;
 }
 console.log (f())*/

 /*function f (a , b) { 
     if (a > b) {
         return a;
     } else {
         return b;
     }
 }

 console.log (f(20, 30))*/

 //Home work 4 
 /*1--------------------
 function number(a){
     if (0) return "нечетное";
    return "четное";
}
  
  number(233323233233323233333) ;*/
//2-------------------------------
/*function f(a, b, c) {
    if (a > b) {
        return a;
    }if (b > c) {
        return b;
    }else {
        return c;
    }
}
console.log (f(21, 234 ,21221))*/
//3------------------------------------
function getDiscountSum (sum , discount) {
    let dis = (sum * discount) / 100
    return dis;
}
console.log(getDiscountSum( 1000 , 20))

//4-------------------------------------

function algoritm (str , sym) {
    if(str.length < sym) {
        return "Ошибка , слишком маленький текст";
    }
    return str.substr(0 , sym)
}

console.log ( algoritm("alvi help me", 5));
//5----------------------------------------
// нет, потму что она не глобальная