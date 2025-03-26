function fullName(city,country){
    return `${this.firstName} ${this.lastName} lives in ${city} , ${country}`
}

const person = {firstName:"Ashis" , lastName:"Mohanty"}
const result = fullName.bind(person,"Odhisha","India")
console.log(result());

