import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import './EventDetails.css'

const EventDetails = ({data}) => {

    const [event, setEvent] = useState({id: 0, name: "", date: "", location: "", locationid: 0})
    const { id } = useParams()

    useEffect(() => {
        const fetchEventById = async () => {
            const response = await fetch(`http://localhost:3001/events/${id}`)
            const data = await response.json()
            setEvent(data)
        }
        fetchEventById()
    }, [data, id]);

    return (
        <div className="EventDetails">
            <main id="event-content" class="event-info">
                <div class="event-details">
                    <h2 id="name">{event.name}</h2>
                    <p id="date">{'Date: ' + event.date}</p>
                    <p id="location">{'Location: ' + event.location}</p>
                </div>
            </main>
        </div>
    )
}

export default EventDetails