import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const LocCard = (props) => { 
    const [location, setLocation] = useState();
    const [locId, setLocId] = useState(0);
    console.log(props)
    console.log(props.location.at(0));

    useEffect(() => {
        setLocation(props.location.at(1));
    }, [props]);

    useEffect(() => {
        setLocId(props.location.at(0));
    }, [props]);

    console.log(location)
    return (
        <div class="loc-card">
            <h3>{location}</h3>
            <Link to={'/event/' + locId}><a>Read More →</a></Link>
        </div>
    )
}

export default LocCard