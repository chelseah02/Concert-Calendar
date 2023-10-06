import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import PageNotFound from './pages/PageNotFound';
import { Link } from 'react-router-dom'


const App = () => {
  
  const [events, setEvents] = useState([]);


  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('http://localhost:3001/events')
      const data = await response.json()
      setEvents(data)
    }
    fetchEvents()
  }, []);


  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<Events data={events}/>
    },
    {
      path:"/event/:id",
      element: <EventDetails data={events} />
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
            <img src="/logo.png"/>
            <h1>Concert Calendar</h1>
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