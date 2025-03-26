// function outer(){
//     const a = 20;

//     function inner(){
//         console.log(a);
        
//     }
//     inner()
// }
// outer()

function outer() {
    let count = 0;  // Outer variable

    function inner() {
        count++;  // Accessing outer variable
        console.log(count);
    }

    return inner;  // Return inner function
}

const increment = outer();  // Call outer() and store reference to inner

increment()
increment()
increment()
