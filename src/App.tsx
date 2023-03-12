import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {

    let bigCities = ["New York", "Los Angeles", "Chicago", "Houston"]
    const handleSelectCity = (city: string) => console.log(city)

    return (
        <div className="App">
            <ListGroup
                bigCities={bigCities}
                heading={"City"}
                onSelectCity={handleSelectCity}
            />
            <Alert />
        </div>
    );
}

export default App;