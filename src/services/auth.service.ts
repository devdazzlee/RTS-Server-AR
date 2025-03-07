import { User, IUser } from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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


const generateAccessToken = (userId: string): string => {
    return jwt.sign({ userId }, process.env.JWT_ACCESS_SECRET!, {
        expiresIn: '15m', // common short expiry for access tokens
    });
};

const generateRefreshToken = (userId: string): string => {
    return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET!, {
        expiresIn: '7d', // longer expiry for refresh tokens
    });
};

/**
 * Log in a user by verifying email/password and returning access & refresh tokens.
 */
export const login = async (email: string, password: string) => {
    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    // 2. Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }

    // 3. Generate tokens
    const accessToken = generateAccessToken(user._id.toString());
    const refreshToken = generateRefreshToken(user._id.toString());

    // 4. (Optional) Store refresh token in DB if you want to track invalidation
    // user.refreshToken = refreshToken;
    // await user.save();

    return { accessToken, refreshToken };
};

/**
 * Verify the refresh token and generate a new access token.
 */
export const refreshAccessToken = async (refreshToken: string) => {
    try {
        // 1. Verify the refresh token
        const decoded = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH_SECRET!
        ) as { userId: string };

        // 2. Generate a new access token
        const newAccessToken = generateAccessToken(decoded.userId);
        return { accessToken: newAccessToken };
    } catch (error) {
        throw new Error('Invalid refresh token');
    }
};
