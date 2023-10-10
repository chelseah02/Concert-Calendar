import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import './EventDetails.css'
import Card from '../components/Card'

const LocationDetails = ({data}) => {

    const [events, setEvents] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchEventsByLocation = async () => {
            const response = await fetch(`http://localhost:3001/events/${id}`)
            const data = await response.json()
            setEvents(data)
        }
        fetchEventsByLocation()
    }, [data, id]);

    return (
        <div className="EventDetails">
            <main id="event-content" class="event-info">
            {
                events && events.length > 0 ?
                events.map((event,index) => 
                    <div key={index} className='event'>
                        <h2>Event Name: {event.name}</h2>
                        <p> Date: {event.date} </p>
                        <p> Location: {event.location}</p>
                    </div>

                ) : <h3 className="noResults">{'No Events at this Location Yet 😞'}</h3>
            }
            </main>
        </div>
    )
}

export default LocationDetails