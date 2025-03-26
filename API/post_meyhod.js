const postData = {
    title:'sibun',
    body:'example',
    userId:101
};

const fetchData = async ()=>{
   try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(postData)
    })
    const data = await response.json()

    console.log(data);
    
   }
   catch(err){
    console.error(err)
   }
}
fetchData()