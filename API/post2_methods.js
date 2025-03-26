const newPost = {
    title:'Sibun',
    body:"This is the boddy of new post",
    userId:1
}

const fetchData= async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify( newPost)             
            
        })
        const data = await response.json();
        console.log("created resouces",data);
        

    }
    catch(err){
        console.error(err)
    }
}
fetchData()