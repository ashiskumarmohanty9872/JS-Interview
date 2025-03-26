const hello = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Good morning Champ ,wake up")
        },1000)
    })
}

const workout = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Work hard Champion, you definitey get sucess")
        },1000)
    })
}

// const sucess= async ()=>{
//   try{
//     const result1 = await hello();
//     const result2 = await workout()

//     console.log(result1);
//     console.log(result2);
    
//   }
//   catch(err){
//     console.log(err);
    
//   }
// }
// sucess()

hello()
.then(msg=>{
    console.log(msg);
    return workout()
    
})
.then(msg=>{
    console.log(msg);
    
})
.catch(err=>{
    console.error(err)
})

