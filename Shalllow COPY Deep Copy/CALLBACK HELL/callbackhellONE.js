

function doTask1(input, callback) {
    setTimeout(() => {
        console.log('Task 1 completed');
        callback(input + ' -> result1');
    }, 1000);
}

function doTask2(input, callback) {
    setTimeout(() => {
        console.log('Task 2 completed');
        callback(input + ' -> result2');
    }, 1000);
}

function doTask3(input, callback) {
    setTimeout(() => {
        console.log('Task 3 completed');
        callback(input + ' -> result3');
    }, 1000);
}

function doTask4(input, callback) {
    setTimeout(() => {  
        console.log('Task 4 completed');
        callback(input + ' -> result4');
    }, 1000);
}

// Triggering the tasks
doTask1('Start', function(result1) {
    doTask2(result1, function(result2) {
        doTask3(result2, function(result3) {
            doTask4(result3, function(result4) {
                console.log('All tasks completed');
                console.log('Final Output:', result4);
            });
        });
    });
});

// async function executeTasks() {
//     try {
//       const result1 = await doTask1();
//       const result2 = await doTask2(result1);
//       const result3 = await doTask3(result2);
//       const result4 = await doTask4(result3);
//       console.log('All tasks completed');
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   executeTasks();
  
