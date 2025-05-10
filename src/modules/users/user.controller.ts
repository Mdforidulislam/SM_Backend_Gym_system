import { userService } from "./user.service";
import { Request, Response } from 'express';

const createUser = async (req: Request, res: Response): Promise<void> => {
   try {
    const {userData } = req.body;
    const user = await userService.createUser(userData);
    res.status(200).json({
        success: true,
        message: "User created successfully",
        data: user
    });
   } catch (error) {
    res.status(500).json({
        success: false,
        message: "User creation failed",
        error: error
    });
   }
}

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   try {
    const users = await userService.getAllUsers();
    res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        data: users
    });
   } catch (error) {
    res.status(500).json({
        success: false,
        message: "Users fetching failed",
        error: error
    });
   }
}

const updateUser = async (req: Request, res: Response): Promise<void> => {
   try {
    const { id } = req.query;
    const {userData} = req.body;

    console.log(id, userData);

    const user = await userService.updateUser(id as string, userData);
    res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: user
    });
   } catch (error) {
    res.status(500).json({
        success: false,
        message: "User update failed",
        error: error
    });
   }
}

const deleteUser = async (req: Request, res: Response): Promise<void> => {
   try {
    const { id } = req.query;
    const user = await userService.deleteUser(id as string);
    res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: user
    });
   } catch (error) {
    res.status(500).json({
        success: false,
        message: "User deletion failed", 
        error: error
    });
   }
}

export const userController = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers
}
