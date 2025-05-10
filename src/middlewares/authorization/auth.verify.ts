import {  Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { config } from "../../config";


interface JwtPayload {
    id: string;
    username: string;
    role: string;
}



const authVerify = (allowedRoles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

        if (!token) {
            res.status(401).json({
                success: false,
                message: 'Unauthorized - No token provided'
            });
            return;
        }

        try {
            const decoded = jwt.verify(token, config.SECRECT_KEY as string) as JwtPayload;
            
            if (!allowedRoles.includes(decoded.role)) {
                res.status(403).json({
                    success: false,
                    message: 'Forbidden - You do not have permission to access this resource'
                });
                return;
            }

            (req as any).user = decoded;
            next();
        } catch (error) {
            res.status(401).json({
                success: false,
                message: 'Unauthorized - Invalid token'
            });
            return;
        }
    }
}


export const authVerifyAccess = {
    authVerify
}
