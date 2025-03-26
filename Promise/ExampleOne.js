// Creating a Promise
const fetchData = (shouldSucceed) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve("Data fetched successfully! ✅");
        } else {
          reject("Failed to fetch data ❌");
        }
      }, 2000); // Simulating an async task (like fetching data from a server)
    });
  };
  
  // Using the Promise
  fetchData(true)
    .then((message) => {
      console.log(message); // If the promise resolves
    })
    .catch((error) => {
      console.error(error); // If the promise rejects
    })
    .finally(() => {
      console.log("Operation completed. 🔄");
    });
  

/*  
.   The fetchData function returns a promise.
.   Inside the promise, we use setTimeout to simulate an asynchronous operation (e.g., API call).
.   If shouldSucceed is true, resolve() is called, marking the promise as fulfilled.
.   If shouldSucceed is false, reject() is called, marking the promise as rejected.
.   The .then() method handles successful completion.
.   The .catch() method handles errors.
.   The .finally() method runs regardless of the outcome (like cleanup code).*/