const fetchData = ()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("Data fetch sucessfully");
            
            resolve({name:"Ashis",age:30})
        },2000)
    })
}

const processData = (data)=>{
    console.log("Data processed:" , data);
    return `Processed Data for ${data.name}`
}

fetchData()
.then(data=>processData(data))
.then(processData=>{
    console.log(processData);
    
})