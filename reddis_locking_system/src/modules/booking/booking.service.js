import { getSeatStatus, bookSeat } from './booking.model.js';

const bookSeatService = async (seatId) => {

    const seatStatus = getSeatStatus(seatId);

    if (!seatStatus) {
        return { status: 404, message: "Seat not found." };
    }

    if (seatStatus !== "available") {
        return { status: 400, message: "Seat already booked." };
    }

    bookSeat(seatId);

    return { status: 200, message: `Seat ${seatId} booked successfully.` };
};

export { bookSeatService };