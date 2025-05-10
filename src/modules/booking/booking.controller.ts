
import { Request, Response } from "express";
import { bookingService } from "./booking.service";

const bookClass = async (req: Request, res: Response) => {
    try {
        const { bookingInfo } = req.body;

        const result = await bookingService.bookClass(bookingInfo);

        console.log(result, 'result');

        if (result === "Already booked at this time please try another time") {
            res.status(400).json({
                success: false,
                message: "Already booked at this time please try another time",
            });
        }

        res.status(200).json({  
            success: true,
            message: "Class booked successfully",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to book class",
            error: error
        });
    }
};


const editBooking = async (req: Request, res: Response) => {
    try {
        const { bookingInfo } = req.body;

        const result = await bookingService.editBooking(bookingInfo);

        res.status(200).json({
            success: true,
            message: "Booking updated successfully",
            data: result
        });


    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update booking",
            error: error
        });
    }
};

const deleteBooking = async (req: Request, res: Response) => {
    try {
        const { classId } = req.params;
        const { userId } = req.body;

        const result = await bookingService.deleteBooking(classId, userId);

        res.status(200).json({
            success: true,
            message: "Booking deleted successfully",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to delete booking",
            error: error
        });
    }
};

export const bookingController = {
    bookClass,
    editBooking,
    deleteBooking
};
