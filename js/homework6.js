let a = ["lorem", 123 , true , 'ipsum'];

a.push('frontend', 3553 , false);
a.unshift( 'adam' , "JS");
console.log (a);
let em = [];
em.push("ramadan", 12345);
em.unshift ("bro", "cried", false);
em.unshift ("lorem", 123 , true , 'ipsum');
em.shift();
em.pop ()
em.pop()
console.log(em);

//for (let i = 0 ; i < 1000; i++){
//    console.log (i)
//}

let q = [false , true , 12324, "ffer"]
let b = prompt ()
q.push (b)
for (let i = 0 ; i < a.length; i++)
console.log (q[i])

let arre = [10, 123, 13, 481, 1931];
        let Sum = 0;
      for (let i = 0; i < arre.length; i++) {
          Sum += arre[i]
       }
       console.log(Sum);

let array = ['frontend', ['js', 'html', 'css'], 'react', ['node js', 'mysql'], 'php']

console.log (array[1][0],array[1][2] ,array[3][1])

let arr = ['frontend', ['js', 'html', 'css'], 'react', ['node js', 'mysql'], 'php']

for (let i = 0; i < arr.length; i++) {
     if ( typeof arr[i] === 'object') {
          for ( let j = 0 ; j < arr[i].length; j++){
              console.log(arr[i][j])
          }
     } else {
        console.log(arr[i])
     }
}

