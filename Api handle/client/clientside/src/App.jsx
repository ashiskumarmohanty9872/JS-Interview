import React, { useEffect, useState } from "react";

const App = () => {
    const [schemes, setSchemes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/schemes")
            .then(response => response.json())
            .then(data => setSchemes(data))
            .catch(error => console.error("Error fetching schemes:", error));
    }, []);

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
