let arr_1 = [101, 202, 303, 404, 505]
let arr_2 = [606, 707, 808, 909]
let superArr = [...arr_1,...arr_2]
let min = Math.min(...superArr)
console.log (min)

let obj = {width: 300, height: 500,}
let sum = obj.width + obj.height;
let obj2 = {...obj , area:function(){
    return obj.width * obj.height
}}
console.log (obj2)

function f (...rest) {
    let sum = 0 ;
    for (let i = 0; i < rest.length; i++ ) {
        sum = sum + rest[i];
    }
}
f (10 ,20, 23, 3,553,)
console.log(sum)

console.log(document.documentElement)
console.log(document.body.firstElementChild.firstElementChild.firstElementChild)
console.log(document.head.firstElementChild.firstChild)
let b = document.body.firstElementChild.firstElementChild.firstElementChild;
b.remove()