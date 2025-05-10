import { userModel } from "../users/user.module";
import { IAuthRequest } from "./auth.interface";



const login = async (authRequest: IAuthRequest ) => {
    const { userName, password } = authRequest;

    console.log(userName, password, "checking password");

    const user = await userModel.User.findOne({ $and: [{ username: userName }, { password: password }] });

    if (!user) {
        return {message: "User Not Found"}
    }

    return user;


}

const logoutuser = async (authRequest: IAuthRequest) => {
    const { userName, password } = authRequest;

    const user = await userModel.User.findOne({ $and: [{ username: userName }, { password: password }] });

    if (!user) {
        throw new Error("User not found");
    }

    return user;
}




const authService = {
    login,
    logoutuser
}

export default authService;
