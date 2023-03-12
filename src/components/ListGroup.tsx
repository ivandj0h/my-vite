function ListGroup() {

    let bigCities = ["New York", "Los Angeles", "Chicago", "Houston"]
    bigCities = []

    const getBigCities = () => {
        return bigCities.length === 0 ? <p>There are no cities in the list.</p> : null
    }

    return (
        <>
            <h1>List Group</h1>
            {getBigCities()}
            <ul className="list-group">
                {bigCities.map((city) => (
                    <li className="list-group-item" key={city}>{city}</li>)
                )}
            </ul>
        </>
    )
}

export default ListGroup;