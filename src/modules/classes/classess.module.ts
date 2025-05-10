import { Schema, model } from "mongoose";
import { IClass } from "./classess.interface";

const classSchema = new Schema<IClass>({
    className: {
        type: String,
        required: true
    },
    trainerId: {
        type: String,
        ref: 'User',
        required: true
    },
    classStart: {
        type: Date,
        required: true
    },
    classEnd: {
        type: Date,
        required: true
    },
    fixTime: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export const Class = model<IClass>('Class', classSchema);
