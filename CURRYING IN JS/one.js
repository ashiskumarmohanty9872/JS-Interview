// Example - 1

// function curry(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(curry(2)(4)(5));


// Example-2

// function multiply(a){
//     return function(b){
//         return a*b;
//     }
// }

// const double = multiply(2);
//  console.log(double(5));

//  const triple= multiply(3)
//  console.log(triple(4));
 
//  Example -3

function log(date) {
    return function(level) {
        return function(message) {
            console.log(`[${date}] [${level}] ${message}`);
        };
    };
}

const logWithDate = log("2025-03-22");

const infoLogger = logWithDate("INFO");
infoLogger("Application started");  
// [2025-03-22] [INFO] Application started

const errorLogger = logWithDate("ERROR");
errorLogger("An error occurred");  
// [2025-03-22] [ERROR] An error occurred
