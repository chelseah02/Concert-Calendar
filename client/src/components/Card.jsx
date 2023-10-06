import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => { 
    
    const [event, setEvent] = useState({id: 0, name: "", date: "", location: ""})

    useEffect(() => {
        setEvent({id: props.id, name: props.name, date: props.date, location: props.location});
    }, [props]);

    return (
        <div className="card">
            <div className='bottom-container'>
                <h3>{event.name}</h3>
                <p>{'Location: ' + event.location}</p>
                <Link to={'/event/' + event.id}><a>Read More →</a></Link>
            </div>
        </div>
    )
}

export default Card