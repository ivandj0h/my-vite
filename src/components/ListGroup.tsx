import {useState} from "react";

interface ListGroupProps {
    bigCities: string[]
    heading: string
    onSelectCity: (city: string) => void
}

function ListGroup({bigCities, heading, onSelectCity}: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <>
            <h3>{heading}</h3>
            {bigCities.length === 0 && <p>There are no cities in the list.</p>}
            <ul className="list-group">
                {bigCities.map((city, i) => (
                    <li
                        className={selectedIndex === i ? "list-group-item active" : "list-group-item"}
                        key={city}
                        onClick={() => {
                            setSelectedIndex(i);
                            onSelectCity(city);
                        }}
                    >{city}
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default ListGroup;