// function fullName(city,country){
//     // console.log( this.firstName + " " +this.lastName +" "+ "is lives in"+" "+city+" ,"+country)
//     return `${this.firstName} ${this.lastName } is lives in ${city} , ${country}`
// }

// const person = {
//     firstName:"Ashis",
//     lastName:"Mohanty"
// }

// console.log(fullName.apply(person,["Odhisha","India"]));

// Example - 2

function greet(greeting){
    return `${greeting} , ${this.name}`
}
const user = { name:"Ashis Mohanty"}

console.log(greet.apply(user,["work hard "]));

