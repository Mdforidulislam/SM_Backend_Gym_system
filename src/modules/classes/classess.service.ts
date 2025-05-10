import { IClass } from "./classess.interface";
import { Class } from "./classess.module";

// create class
const createClass = async (payload: IClass): Promise<IClass> => {

    const startOfDay = new Date();
    startOfDay.setHours(0,0,0,0);
    
    const endOfDay = new Date(); 
    endOfDay.setHours(23,59,59,999);

    const todayClassCount = await Class.countDocuments({
        $and: [
            { createdAt: { $gte: startOfDay } },
            { createdAt: { $lte: endOfDay } }
        ]
    });


    if (todayClassCount >= 5) {
        throw new Error("Maximum limit of 5 classes per day has been reached");
    }

    const result = await Class.create(payload);
    return result;
};



// get all classes

const getAllClasses = async (): Promise<IClass[]> => {
    const result = await Class.find();
    return result;
};

// get class by id
const getClassById = async (id: string): Promise<IClass[]> => {
    const result = await Class.find({
        trainerId: id
    })
    return result;
};

// update class
const updateClass = async (id: string, payload: Partial<IClass>): Promise<IClass | null> => {

    console.log(id, payload, 'id, payload');
    
    const result = await Class.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

// delete class

const deleteClass = async (id: string): Promise<IClass | null> => {
    const result = await Class.findByIdAndDelete(id);
    return result;
};

// get class by trainer id

export const classService = {
    createClass,
    getAllClasses,
    getClassById,
    updateClass,
    deleteClass
};
