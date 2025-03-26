const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

const API_URL = "https://api.mfapi.in/mf";
const SCHEME_CODES = ["100198", "100264", "100352", "100471", "100605"];

app.get("/schemes", async (req, res) => {
    try {
        const  data  = await axios.get(API_URL);
        const filteredSchemes = data.data
            .filter(scheme => SCHEME_CODES.includes(scheme.schemeCode.toString()))
            .map(scheme => ({
                schemeCode: scheme.schemeCode,
                schemeName: scheme.schemeName
            }));

        res.json(filteredSchemes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
