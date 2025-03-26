// const rocketLaunch = () =>{
//        return  new Promise((resolve ,reject)=>{
//             setTimeout(()=>{
//                 const launchSucess = true;

                
//                 console.log("Checking rocket launch status...");

//                  if (launchSucess) {
//                     resolve("Rocket successfully launched!");
//                   } else {
//                     reject("Uh-oh, the rocket launch encountered a problem.");
//                   }
//             } , 1000)
//         })
// }

// rocketLaunch()

// .then(x => {
//     console.log("'then' method called");
//     console.log(x);
//     console.log("Rocket launch process completed.");
//   })
//   .catch((err)=>{
//         console.error(err)
//   })
 



const placeOrder = () => {
    return new Promise((resolve , reject ) =>{
       setTimeout(() => {
      resolve("Order placed.");
    
    }, 1000);
  
    });
  }
  
  placeOrder()
  .then((resolvedPromise) => {
      console.log(resolvedPromise);
      console.log("Order will be dispatched soon");
    })
    
 
