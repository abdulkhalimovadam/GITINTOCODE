let arr = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]
arr.forEach(function (item, key){
   if (item % 2 != 0) {
   console.log(item)
   }
    }
)

let words = ["lorem ipsum", "javascript","php", "css", "react", "git", "html", "mysql"]

 words.forEach(function (item, key) {
    if (item.length < 4) {
        console.log(item)
    }

})
let three = [1, -3, 5, 6, -7, 8, 9, -11]
let arro= three.filter(function (item, key){
    return item > 0 ;
    })

    console.log(three);
    console.log(arro);

let adam = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]
adam.forEach(function (item, key){
        if (item % 2 != 1) {
            console.log(item)
        }
    }
)
let lorem = ["lorem ipsum", "javascript","php", "css", "react", "git", "html", "mysql" ]

let newlorem = lorem.filter(function (item, key){
    return item.length != 4;
})
console.log(lorem)
console.log(newlorem)

let cub = [5, 6, 7, 8, 9]

let newcub = cub.map(function (item, key , arr) {
    return Math.pow(item ,2)
})
console.log (newcub);

let obj = [{a: 10, b: 5}, {a: 20, b: 22}, {a: 131, b:55}]
let newobj = obj.map(function (item){
    return item.a + item.b;
})
console.log (newobj)

let mass = [-13, 0, 12, 1662, -0.32, -102, -2]
let filtermass =mass.filter(function (item){
    return item < 0;
})
let reducemass = filtermass.reduce(function (sum , item ,key){
    return sum - item
},0)
console.log (reducemass);

let massive = [ {x: 10, y: "lorem"}, {x: 21, y: 'lorem'}, {x: -17, y: 'lorem'}, {x: 156, y: 'lorem'}];
let reducemas = massive.reduce(function (sum , item , key){
    return sum + item.x ;
},0)
console.log(reducemas)