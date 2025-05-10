
import { IClass } from "../classes/classess.interface";
import { Class } from "../classes/classess.module";
import { IBooking } from "./booking.interface";
import { Booking } from "./booking.module";



type IBookingResponse = IBooking & {
    _id: string;
    __v: number;
    message?: string;
    bookTime?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}


const bookClass = async (bookingInfo: IBooking): Promise<IBookingResponse | null | string> => {
    const { classId, userId } = bookingInfo;

    const [classToBook, currentBookingCount, existingBooking] = await Promise.all([
        Class.findById(classId),
        Booking.countDocuments({ classId: classId }),
        Booking.findOne({ classId, userId })
    ]);

    if (!classToBook) return "Class not found";

    if (existingBooking) return  "booking already exists";

    if (currentBookingCount >= 10) return "Class is fully booked";

    // Check if trainer has another booking at the same time (same day)
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const isSameTimeBooking = await Booking.exists({
        userId: userId,
        date: {
            $gte: startOfDay,
            $lte: endOfDay
        }
    });

    if (isSameTimeBooking) {
        return "Trainer is already booked at this time. Please choose another time.";
    }

    // Create and return booking
    const result = await Booking.create(bookingInfo);
    const bookingDoc = result.toObject();

    // Convert ObjectId fields to strings
    return {
        ...bookingDoc,
        _id: bookingDoc._id.toString(),
        classId: bookingDoc.classId.toString(),
        userId: bookingDoc.userId.toString()
    } as IBookingResponse;
};


const editBooking = async ( bookingInfo: IBooking): Promise<IBookingResponse | null> => {
       const {classId, userId} = bookingInfo;


    // set date for rang 
       const startDate = new Date();
       startDate.setHours(0, 0, 0, 0);
       const endDate = new Date();
       endDate.setHours(23, 59, 59, 999);


    //  find Booking By date deleted

   await Booking.deleteOne({
        classId,
        userId,
        date: {
            $gte: startDate,
            $lte: endDate
        }
    })

    const result = await Booking.create(bookingInfo);
    const bookingDoc = result.toObject();
    // Convert ObjectId fields to strings
    return {
        ...bookingDoc,
        _id: bookingDoc._id.toString(),
        classId: bookingDoc.classId.toString(),
        userId: bookingDoc.userId.toString()
    } as IBookingResponse;
};  

const deleteBooking = async (classId: string, userId: string): Promise<IBooking | null> => {
        const booking = await Booking.findOneAndDelete({
            classId,
            userId
        });
        
        if (!booking) {
            return null;
        }

        return {
            ...booking.toObject(),
            _id: booking._id.toString(),
            classId: booking.classId.toString(),
            userId: booking.userId.toString()
        } as IBookingResponse;
};

export const bookingService = {
    bookClass,
    editBooking, 
    deleteBooking
};
