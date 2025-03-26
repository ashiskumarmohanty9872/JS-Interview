function doTask1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Task 1 completed');
        resolve('Result from Task 1');
      }, 1000);
    });
  }
  
  function doTask2(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Task 2 completed with input: ${input}`);
        resolve('Result from Task 2');
      }, 1000);
    });
  }
  
  function doTask3(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Task 3 completed with input: ${input}`);
        resolve('Result from Task 3');
      }, 1000);
    });
  }
  
  function doTask4(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Task 4 completed with input: ${input}`);
        resolve('Result from Task 4');
      }, 1000);
    });
  }
  
  
  async function runTasks() {
    try {
      const result1 = await doTask1();
      const result2 = await doTask2(result1);
      const result3 = await doTask3(result2);
      const result4 = await doTask4(result3);
      console.log('All tasks completed');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  runTasks();
  