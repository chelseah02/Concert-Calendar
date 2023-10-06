import { pool } from '../config/database.js'
import '../config/dotenv.js'
import eventData from '../data/events.js'

const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,  
      date VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 events table created successfully')
  } catch (err) {
    console.error('⚠️ error creating events table', err)
  }
}

const seedEventsTable = async () => {
  await createEventsTable()

  eventData.forEach((event) => {
    const insertQuery = {
      text: 'INSERT INTO events (name, date, location) VALUES ($1, $2, $3)'
    }

    const values = [
      event.name,
      event.date,
      event.location,
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting event', err)
        return
      }
      console.log(`✅ ${event.name} added successfully`)
    })
  })
}

seedEventsTable()
