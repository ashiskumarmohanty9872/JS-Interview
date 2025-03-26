// const hello = async ()=>{
//     return "HELLO SIBUN WORK HARD , U WILL GET A JOB"
// };
// hello()
// .then(msg=>{
//     console.log(msg);
    
// })


const hello = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("Wake of Champion") 
        },1000)
    })
}

const workout = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Champ workOut hard to get ur dream")
        },1000)
    })
}

const Champ = async ()=>{
   const result1 =  await hello();
    const result2 = await workout()

    console.log(result1);
    console.log(result2);
    
}

Champ()