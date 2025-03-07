// models/user.model.ts

import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IUser extends Document {
    _id: Types.ObjectId; // or _id: string; depending on your needs
    email: string;
    password: string;
    refreshToken?: string;
}

const UserSchema = new Schema<IUser>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        refreshToken: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
);

export const User = mongoose.model<IUser>('User', UserSchema);
