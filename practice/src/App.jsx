import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [schemes, setSchemes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/schemes")
            .then(response => {
                setSchemes(response.data);
                console.log(response);
                
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);
    console.log(schemes);
    

    return (
        <div>
            <h2>Mutual Fund Schemes</h2>
            <ul>
                {schemes.map(scheme => (
                    <li key={scheme.schemeCode}>{scheme.schemeName}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
