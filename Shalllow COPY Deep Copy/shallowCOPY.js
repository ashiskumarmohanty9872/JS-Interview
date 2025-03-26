/* Shallow copy */
// Example-1


// let obj1 = {
//     name:"ASHIS" , adress:{city:"BBSR"}
// }
// let obj2 = {...obj1}

// obj2.adress.city = "Bangalore"
// console.log(obj1.adress.city);

// Example-2

// let obj1 = {
//     name:"Ashis",
//     address:{
//         city:"BBSR",
//         state:"Odisha"
//     }
// }

// let obj2 = Object.assign({},obj1)
// obj2.address.city="CTC"
// console.log(obj1.address.city); //CTC
// console.log(obj2.address.city);//CTC

/* The address object is copied by reference, 
so changes in obj2.address affect obj1.address. */






// DEEP COPY

// let obj1 = {
//     name:"Sibun",
//     address:{city:"BBSR"}
// }
// let obj2 = JSON.parse(JSON.stringify(obj1))

// obj2.address.city="BNG"
// console.log(obj1.address.city);

// Example-2

let obj1={
    name:"Sibun",
    address:{
        city:"BBSR",
        state:"ODISHA"
    }
}

let obj2 = JSON.parse(JSON.stringify(obj1))
obj2.address.city = "CTC"
console.log(obj1.address.city);
console.log(obj2.address.city);

