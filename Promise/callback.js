const hello = (keyword,callback)=>{
    setTimeout(()=>{
    console.log(`hiii ${keyword} , you will definitely get the job `);
            callback()
    },2000)        
    
}

const sucess = ()=>{
    console.log("search complete");
    
}

hello("sibun",sucess)
