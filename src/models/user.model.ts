import { Schema, model, Document, Types } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password: string;
    _id: Types.ObjectId;
}

const userSchema = new Schema<IUser>(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

export default model<IUser>('User', userSchema);
