import React, { useState, useEffect } from 'react'
import './Events.css'
import Card from '../components/Card'
import LocCard from '../components/LocCard'


const Locations = (props) => {

    const [events, setEvents] = useState([])
    const uniqueSet = new Set();

    useEffect(() => {
        setEvents(props.data)
    }, [props])
    
    // Use the filter method to create a new array with unique values
    const getDistinctLocations = () => {
        const uniqueLocations = new Map();

        events.forEach(event => {
            uniqueLocations.set(event.locationid, event.location);
        });

        return Array.from(uniqueLocations);
    }

    const uniqueLocations = getDistinctLocations();
    console.log(uniqueLocations);

    return (
        <div className='Locations'>
            <main>
            {
                uniqueLocations && uniqueLocations.length > 0 ?
                uniqueLocations.map((location,index) => 
                <LocCard location={location} />

                ) : <h3 className="noResults">{'No Locations Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Locations