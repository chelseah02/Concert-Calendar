import { pool } from '../config/database.js'

const getEvents = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM events ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getEventById = async (req, res) => {
  try {
    const locationid = req.params.eventId
    //const selectQuery = `SELECT name, date, location FROM events WHERE id = ${eventId}`
    const selectQuery = `SELECT * FROM events WHERE locationid = ${locationid}`
    const results = await pool.query(selectQuery)

    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const getDistinctLocations = async(req, res) => {
  try {
    const locations = await pool.query('SELECT DISTINCT location FROM events')
    res.status(200).json(locations.rows)
  }
  catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getEventsByLocationId = async (req, res) => {
  try {
    const locationId = req.params.locationid
    const selectQuery = `SELECT * FROM events WHERE locationid = ${locationId}`
    const results = await pool.query(selectQuery)

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

export default {
  getEvents,
  getEventById, 
  getDistinctLocations, 
  getEventsByLocationId
}
