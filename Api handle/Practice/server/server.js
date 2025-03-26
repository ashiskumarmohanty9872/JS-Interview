const express = require("express");
const axios = require("axios");
const cors = require("cors");

// install express

const app = express()
const PORT = 5000;

// cors() is a middleware function provided by the CORS package, which allows cross-origin requests.
// app.use() is a middleware function in Express that applies middleware to every incoming request.

app.use(cors());

const API_URL = "https://api.mfapi.in/mf";
const schemeCodes = ["100198", "100264", "100352", "100471", "100605"];

app.get("/schemes" , async (req ,res)=>{
    try{

        const data = await axios.get(API_URL)
        const filteredSchema = data.data.filter( schema => schemeCodes.includes(schema.schemeCode.toString()))
        .map(schema => ({
            schemeCode:schema.schemeCode,
            schemeName: schema.schemeName
        }))
        res.json(filteredSchema)
    }
    catch (error){
        res.status(500).json({error: "failed to fetch data"})
    }
})

app.listen(PORT , ()=> {
    console.log(`server is running on http://localhost:${PORT}`);
    
})