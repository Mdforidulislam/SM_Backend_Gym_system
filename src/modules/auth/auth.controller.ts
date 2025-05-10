
import { Request, Response } from "express";

import authService from "./auth.service";
import jwt from 'jsonwebtoken';
import { config } from "../../config";



interface IUserResponse {
    _id: string;
    username: string;
    role: string;
}


// login user
const login = async (req: Request, res: Response) => {
    const {userData} = req.body;

    const user = await authService.login(userData);

    if ('message' in user) {
        return res.status(401).json({ message: "Invalid username or password" });
    }

    if(user){
        const token = jwt.sign(
            { id: user?._id, username: user.username, role: user.role  },
            config.SECRECT_KEY as string,
            { expiresIn: '1d' }
        );
        
        // Set token in cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        });

        // Return success response with token
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token: token,
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            }
        });
    }
}


// logout user
const logout = async (req: Request, res: Response) => {

    const { userData } = req.body;

    try {
        const user = await authService.logoutuser(userData);

        // Clear the JWT token cookie
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        });

        return res.status(200).json({
            success: true, 
            message: "Logout successful"
        });

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid username or password"
        });
    }
}

const authController = {
    login,
    logout,
}

export default authController;
