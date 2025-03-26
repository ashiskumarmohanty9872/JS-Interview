function makePromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const sucess = true;
            if(sucess){
                resolve("Work hard u will sure get a job")
            }
            else{
                reject("you will get a job sure ,while working too hard")
            }
        },2000)
    })
}

makePromise()
.then(msg=>{
    console.log(msg);
    
})
.catch(err=>{
    console.error(err)
})
.finally(msg=>{
    console.log("Finall blcok will execute always ")
})