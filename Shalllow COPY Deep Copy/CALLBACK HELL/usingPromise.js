// ✅ Fixed using Promises (if doTaskX return Promises):



function doTask1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Task 1 completed');
        resolve('Result of Task 1');
        // reject('Error in Task 1'); // Uncomment to simulate an error
      }, 1000);
    });
  }
  
  function doTask2(result1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Task 2 completed with:', result1);
        resolve('Result of Task 2');
      }, 1000);
    });
  }
  
  function doTask3(result2) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Task 3 completed with:', result2);
        resolve('Result of Task 3');
      }, 1000);
    });
  }
  
  function doTask4(result3) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Task 4 completed with:', result3);
        resolve('Result of Task 4');
      }, 1000);
    });
  }
  
  // Call the tasks in sequence
  doTask1()
    .then(result1 => doTask2(result1))
    .then(result2 => doTask3(result2))
    .then(result3 => doTask4(result3))
    .then(result4 => {
      console.log('All tasks completed:', result4);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });

    // 






