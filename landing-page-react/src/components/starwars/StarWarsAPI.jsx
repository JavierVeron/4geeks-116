import { useEffect, useState } from "react"
import People from "./People";

const StarsWarsAPI = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const urls = [
            "https://www.swapi.tech/api/films/",
            "https://www.swapi.tech/api/people/", 
            "https://www.swapi.tech/api/planets/", 
            "https://www.swapi.tech/api/species/", 
            "https://www.swapi.tech/api/starships/", 
            "https://www.swapi.tech/api/vehicles/"
        ]

        Promise.all(urls.map(item => (fetch(item).then(response => response.json()))))
        .then(data => {
            setItems(data)
        })
    }, [])

    return (
        <>
            <People resultAPI={items[1]} />
        </>
    ) 
}

export default StarsWarsAPI