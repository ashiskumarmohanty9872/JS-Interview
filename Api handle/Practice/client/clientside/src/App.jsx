import React, { useEffect, useState } from "react";
import axios from "axios" 

function  App(){
  const [schema ,setSchema] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/schemes")
    .then(res => {
      setSchema(res.data)
    })
    .catch(error =>{
      console.error("Error fetchinh data:",error)
    })
  },[]);
  
  return(
    <div>
      <h2>Mutual Fund Schemes</h2>
      <ul>
          {schema.map(schema => (
            <li key={schema.schemeCode}> {schema.schemeName} </li>
          ))}
      </ul>
    </div>
  )

}

export default App;