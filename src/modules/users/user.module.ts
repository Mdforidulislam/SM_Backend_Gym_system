

import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';


const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const User = model<IUser>('User', userSchema);

export const userModel = {
    User
}

