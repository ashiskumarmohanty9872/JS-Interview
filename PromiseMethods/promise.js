function fetchData1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data from fetchData1");
      }, 1000); // Simulates 1 second delay
    });
  }
  
  function fetchData2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data from fetchData2");
      }, 2000); // Simulates 2 seconds delay
    });
  }
  
  // Using Promise.all to call both functions

  // Promise.all([fetchData1(), fetchData2()])
  //   .then((results) => console.log(results))
  //   .catch((error) => console.error(error));

//   Promise.any() 

// Promise.any([fetchData1(), fetchData2()])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

//  Promise.race()

// Promise.race([fetchData1(), fetchData2()])
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// Promise.allSettled()

// Promise.allSettled([fetchData1(), fetchData2()])
//   .then((results) => console.log(results));

// Promise.resolve()

Promise.resolve('Success').then((value) => console.log(value));


// Promise.reject()

Promise.reject('Error occurred').catch((error) => console.error(error));





  