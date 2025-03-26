const fetchData = async ()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
            console.error("N/w is not responding")
        }
        const data = await response.json()
        // console.log("Fetch Data",data);
        console.log("User 1:",data[0]);
        
        
    }
    catch(err){
        console.error(err)
    }
}
fetchData()