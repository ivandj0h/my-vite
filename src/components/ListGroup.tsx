import {useState} from "react";

function ListGroup() {

    let bigCities = ["New York", "Los Angeles", "Chicago", "Houston"]
    const [selectedIndex, setSelectedIndex] = useState(-1)

    function handleClick(e: MouseEvent) {
        console.log(e)
    }

    return (
        <>
            <h1>List Group</h1>
            {bigCities.length === 0 && <p>There are no cities in the list.</p>}
            <ul className="list-group">
                {bigCities.map((city, i) => (
                    <li
                        className={selectedIndex === i ? "list-group-item active" : "list-group-item"}
                        key={city}
                        onClick={() => setSelectedIndex(i)}>{city}
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default ListGroup;