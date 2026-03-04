import express from "express";
import { bookSeatController } from "./booking.controller.js";

const router = express.Router();

router.get("/book/:seatId", (req, res) => {
  const seatId = req.params.seatId;
  res.json({ message: `Seat ${seatId} booked successfully.` });
});

router.post("/book/:seatId", bookSeatController);

export default router;