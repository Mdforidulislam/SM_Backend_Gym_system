import { Request, Response } from 'express';
import { classService } from './classess.service';

// create class access only for admin
const createClass = async (req: Request, res: Response): Promise<void> => {
    try {
        const {classData} = req.body;
        const result = await classService.createClass(classData);
        res.status(200).json({
            success: true,
            message: "Class created successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Class creation failed",
            error: error
        });
    }
}

// get all classes access only for admin
const getAllClasses = async (req: Request, res: Response): Promise<void> => {
    try {
        const classes = await classService.getAllClasses();
        res.status(200).json({
            success: true,
            message: "Classes fetched successfully",
            data: classes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Classes fetching failed",
            error: error
        });
    }
}


// get class by id access only for trainers
const getClassById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.query;
        const result = await classService.getClassById(id as string);
        res.status(200).json({
            success: true,
            message: "Class fetched successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Class fetching failed",
            error: error
        });
    }
}

// update class access only for admin
const updateClass = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.query;
        const {classData} = req.body;
        const result = await classService.updateClass(id as string, classData);
        res.status(200).json({
            success: true,
            message: "Class updated successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Class update failed",
            error: error
        });
    }
}

// delete class access only for admin
const deleteClass = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.query;
        const result = await classService.deleteClass(id as string);
        res.status(200).json({
            success: true,
            message: "Class deleted successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Class deletion failed",
            error: error
        });
    }
}


export const classController = {
    createClass,
    getAllClasses,
    getClassById,
    updateClass,
    deleteClass
}
