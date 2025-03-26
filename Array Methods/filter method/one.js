// const numbers = [1,2,3,4,5];
// const result = numbers.filter(num => num >2)
// console.log(result);

// Example-2

// const users = ["Ak" , "Dj YO YO Honey Singh" ,"Sk ROY"]
// const longWords = users.filter((word,index,arr) =>{
//     console.log(`Index: ${index}, word:${word}`);
//     return word.length > 2;
    
// })
// console.log(longWords);

// Example-3
// const users = [
//     { id: 1, name: "Alice", isActive: true },
//     { id: 2, name: "Bob", isActive: false },
//     { id: 3, name: "Charlie", isActive: true },
//   ];
//   const activeUsers = users.filter(user => user.isActive);
//   console.log(activeUsers);
//   // Output: [{ id: 1, name: "Alice", isActive: true }, { id: 3, name: "Charlie", isActive: true }]
  
// Example-4 ( Using thisArg Example:)

// const threshold = {
//     min: 50
//   };
//   const scores = [40, 55, 75, 30, 60];
//   const passedScores = scores.filter((score)=>{
//     return score > this.min;
//   }, threshold);
  
//   console.log(passedScores);
  // Output: [55, 75, 60]
  

//   Example-5 ( Chaining filter() with Other Methods:)

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 80 },
    { name: "Monitor", price: 300 }
  ];
  const expensiveProductNames = products
    .filter(product => product.price > 100)
    .map(product => product.name);
     
  console.log(expensiveProductNames);
  // Output: ["Laptop", "Monitor"]
  