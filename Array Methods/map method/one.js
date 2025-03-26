// Example-1

// const numbers = [1 ,2,3,4,5,6];
// const squre = numbers.map((num)=>num * num)
// console.log(numbers);
// console.log(squre);
/* OP-> [ 1, 2, 3, 4, 5, 6 ]
[ 1, 4, 9, 16, 25, 36 ] */

// Example-2

// const names = ["Ak" ,"dj","Don"]
// const nameswithIndex = names.map((name,index)=> `${index + 1}: ${name}`);
// console.log(nameswithIndex);
/* OP->[ '1: Ak', '2: dj', '3: Don' ] */

// Example-3 (Using map() to Convert Data Formats:)

// const users= [
//     {id:1 , name:"Sibun"},
//     {id:2 , name:"Ak"},
//     {id:13, name:"Ashis"}
// ]
// const userNames = users.map(user => user.name)
// console.log(userNames);
// /*OP-> [ 'Sibun', 'Ak', 'Ashis' ] */

// users.map((_,index)=>{
//     console.log(index); // Op -> 0  1  2
    
// })
// console.log(Object.keys(users)); // Op-> [ '0', '1', '2' ] (STRING)
// console.log(Object.keys(users).map(Number)); // Op-> [0 , 1 , 2] (NUMBER)


// Example-4 ( Using map() with Objects:)

// const products = [
//     { name: "Laptop", price: 60000 },
//     { name: "Mobile", price: 20000 },
//     { name: "Tablet", price: 15000 }
//   ];

//   const discountedProducts = products.map( product =>({
//     name:product.name,
//     price:product.price * 0.9
//   }))
//   console.log(discountedProducts);

// Example-5 ( Chaining map() with Other Methods:)

// const numbers = [1,2,3,4,5];
// const evenSqare = numbers.filter( num => num % 2 === 0)
// .map(num => num * num)
// console.log(evenSqare); //OP -> [ 4, 16 ]

  
// Example-6 ( Using thisArg in map():)

// const multiplier = {
//     factor:3,
//   multiply(num){
//         return num * this.factor
//     }
// };

// const numbers = [1,2,3,4,5];
// const result = numbers.map(function(num){
//     return this.multiply(num)
// },multiplier)
// console.log(result);

// Example-6 (Modifying orginal array)

// const users = [{name:"Sibun"} , {name:"Ashis"}];
// users.map(user=> user.name = "Sk")
// console.log(users); //OP->[ { name: 'Sk' }, { name: 'Sk' } ]  

// //Example - 7

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num) => {
//   return num * 2; // Explicitly returning the value
// });
// console.log(doubled);
// // Output: [2, 4, 6, 8, 10]
