import { Schema, model } from "mongoose";

interface IBooking {
    classId: Schema.Types.ObjectId;
    userId: Schema.Types.ObjectId;
    bookTime: Date;
    createdAt: Date;
    updatedAt: Date;
}

const bookingSchema = new Schema<IBooking>({
    classId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    bookTime: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {
    timestamps: true
});

export const Booking = model<IBooking>('Booking', bookingSchema);
