
import { Router } from "express";
import { classController } from "./classess.controller";
import { authVerifyAccess } from "../../middlewares/authorization/auth.verify";

const classRoute = Router();

classRoute.post("/create-class", authVerifyAccess.authVerify(["admin"]), classController.createClass);
classRoute.get("/get-all-classes", authVerifyAccess.authVerify(["admin"]), classController.getAllClasses);
classRoute.get("/get-class-by-id", authVerifyAccess.authVerify(["trainer", "admin"]), classController.getClassById);
classRoute.put("/update-class", authVerifyAccess.authVerify(["admin"]), classController.updateClass);
classRoute.delete("/delete-class", authVerifyAccess.authVerify(["admin"]), classController.deleteClass);

export default classRoute;
