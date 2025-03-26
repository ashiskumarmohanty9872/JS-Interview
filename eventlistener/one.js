const createUser = async ({name ,username ,email}) => {
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users" , {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      
       body:JSON.stringify({
         name,
         username,
         email
       })    
    })
    if(!response.ok){
        console.error("Newtwork is not responding");
    }
    const data = await response.json()
    console.log(data)

    }
    catch(err){
      console.error(err)
    }
  }
  
  const newUser = {
    name: "Oliver Smith",
    username: "oliversmith007",
    email: "oliver.smith@example.com"
  }
  createUser(newUser);