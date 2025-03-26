function doTask1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 1 completed");
        resolve("Result from Task 1");
      }, 1000);
    });
  }
  
  function doTask2(result) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 2 completed with:", result);
        resolve("Result from Task 2");
      }, 1000);
    });
  }
  
  function handleTask1(result) {
    return doTask2(result);
  }
  
  function handleTask2(result) {
    return new Promise((resolve) => {
      console.log("Task 3 handled with:", result);
      resolve("Result from Task 3");
    });
  }
  
  function handleTask3(result) {
    console.log("All tasks completed with:", result);
  }
  
  // Chaining Promises
  doTask1()
    .then(handleTask1)
    .then(handleTask2)
    .then(handleTask3)
    .catch(error => console.error("Error occurred:", error));
  