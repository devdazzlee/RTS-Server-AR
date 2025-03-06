import User, { IUser } from '../models/user.model';
import bcrypt from 'bcrypt';

interface UserData {
    email: string;
    password: string;
}

export const signUp = async (userData: UserData): Promise<{ id: string; email: string }> => {
    const { email, password } = userData;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create and save the new user
    const newUser: IUser = new User({
        email,
        password: hashedPassword,
    });
    await newUser.save();

    // Return a safe response without sensitive data
    return { id: newUser._id.toString(), email: newUser.email };
};
