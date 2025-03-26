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
// fetchData(true)
//   .then((message) => {
//     console.log(message);
//     return "Processing data... 🔄";
//   })
//   .then((nextMessage) => {
//     console.log(nextMessage);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("All operations done.");
//   });


// ⚡ Async/Await (Modern Approach with Promises)  

async function handleData() {
    try {
      const result = await fetchData(true);
      console.log(result);
      console.log("Processing data... 🔄");
    } catch (error) {
      console.error(error);
    } finally {
      console.log("All operations done. ✅");
    }
  }
  
  handleData();
  