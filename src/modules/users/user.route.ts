
import { Router } from "express";
import { userController } from "./user.controller";
import { authVerifyAccess } from "../../middlewares/authorization/auth.verify";

const userRoute = Router();


userRoute.post("/create-user", userController.createUser as any);
userRoute.put("/update-user", userController.updateUser as any);
userRoute.delete("/delete-user", userController.deleteUser as any);
userRoute.get("/get-all-users", authVerifyAccess.authVerify(["admin"]), userController.getAllUsers as any);

export default userRoute;
