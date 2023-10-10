import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import LocationDetails from './pages/LocationDetails';
import PageNotFound from './pages/PageNotFound';
import Locations from './pages/Locations';
import { Link } from 'react-router-dom'


const App = () => {
  
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [locationDetails, setLocationDetails] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('http://localhost:3001/events')
      const data = await response.json()
      setEvents(data)
    }
    fetchEvents()
  }, []);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch('http://localhost:3001/locations')
      const locData = await response.json()
      setLocations(locData)
    }
    fetchLocations()
  }, []);

  // Sets up routes
  let element = useRoutes([
    {
      path: "/events",
      element:<Events data={events}/>
    },
    {
      path:"/event/:id",
      element: <LocationDetails />
    },
    {
      path:"/locations",
      element: <Locations data={locations} />
    },
    {
      path:"/*",
      element: <PageNotFound />
    }
  ]);

  
  return ( 

    <div className="App">

      <header>
        <div className="header-container">
          <div className="header-left">
            <h1>Concert Calendar</h1>
            <br/>
          </div>
          <div className="header-right">
            <Link to="/"><button className="homeBtn">Home</button></Link>
          </div>
        </div>
      </header>

        {element}
        
    </div>

  );
}

export default App;