import { IUser } from "./user.interface";
import { userModel } from "./user.module";


const createUser = async (userData: IUser) => {
   try {
    const user = await userModel.User.create(userData);
    return user;
   } catch (error) {
    throw error;
   }
}


const getAllUsers = async () => {
   try {
    const users = await userModel.User.find();
    return users;
   } catch (error) {
    throw error;
   }
}

const updateUser = async (id: string, userData : any) => { 
   try {

      console.log(id, userData);
    const user = await userModel.User.findByIdAndUpdate(id, userData, {new: true});
    return user;
   } catch (error) {
    throw error;
   }
}


const deleteUser = async (id: string) => {
   try {
    const user = await userModel.User.findByIdAndDelete(id);
    return user;
   } catch (error) {
    throw error;
   }
}

export const userService = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers
}


