const deletePost = async ()=>{
    try{
        const response =await fetch("https://jsonplaceholder.typicode.com/posts/1")
        if(!response.ok){
            console.error("N/W is nopt respondinfg")
        }
        console.log("Rsouces deleted sucessfully");
        
    }
    catch(err){
        console.log(err)   
    }
}
deletePost();