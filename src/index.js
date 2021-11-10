import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";


ReactDOM.render(<App />, document.getElementById("root"));

/*Core Deliverables
As a user:

When the app starts, I can see all plants.
I can add a new plant to the page by submitting the form.
I can mark a plant as "sold out".
I can search for plants by their name and see a filtered list of plants.*/

/*When the app starts user sees all plants, fetch request required*/
{
    useEffect(() => {
        fetch("http://localhost:6001/plants")
            .then((response) => response.json())
            .then((plants) => {
        setPlants(data.plants);
            });	
    }, []);

}
// Its coming back to me now... a few practice runs/ review notes and lectures should be A OK for Friday..! 