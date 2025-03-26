// function greet(greeting , punctuation){
//     console.log(greeting + " ,"+this.name+punctuation);
    
// }
// const person = {name:"Ashis"};
// greet.call(person," work hard","!!!!!") //OP ->  work hard ,Ashis!!!!!

// Example-2

const person = {
    fullName(city , country){
        return `${this.firstName} ${this.lastName} lives in ${city}, ${country}`
    }
};

const person1 = {
    firstName:"Sibun",
    lastName:"Mohanty"
};

console.log(person.fullName.call(person1,"New York" ,"USA"));


// function fullName(city , country){
//     console.log(`${this.firstName} ${this.lastName} lives in ${city} , ${country} `);
    
// }

// const person = {
//     firstName :"Ashis",
//     lastName:"Mohanty"
// }

// fullName.call(person , "Odhisha" ,"India")