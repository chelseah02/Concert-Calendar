import express from 'express'
import EventsController from '../controllers/events.js';

const router = express.Router()

router.get('/locations', EventsController.getDistinctLocations)
router.get('/events', EventsController.getEvents)

router.get('/events/:locationid', EventsController.getEventsByLocationId)
router.get('/:eventId', EventsController.getEventById)

router.get('/', EventsController.getEvents)


export default router
