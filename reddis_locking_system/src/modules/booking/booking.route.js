import express from 'express';
import { bookSeatController } from '../services/booking.controller.js';

const router = express.Router();

// GET route for browser demo
router.get('/book/:seatId', (req, res) => {
  const seatId = req.params.seatId;
  res.json({ message: `Seat ${seatId} booked successfully.` });
});

// Existing POST API
router.post('/book/:seatId', bookSeatController);

export default router;