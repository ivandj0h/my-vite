import React from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    let bigCities = ["New York", "Los Angeles", "Chicago", "Houston"]
    const handleSelectCity = (city: string) => console.log(city)
    const [alertVisible, setAlertVisible] = React.useState(false);

    return (
        <div className="App">
            <ListGroup
                bigCities={bigCities}
                heading={"City"}
                onSelectCity={handleSelectCity}
            />
            <br/>
            {alertVisible && <Alert onClose={() => setAlertVisible(false)}>This is an <b>Alert!</b></Alert>}
            <Button onClick={() => setAlertVisible(true)}>Button Component</Button>
        </div>
    );
}

export default App;