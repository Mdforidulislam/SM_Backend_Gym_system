

import { Router } from "express";
import { bookingController } from "./booking.controller";
import { authVerifyAccess } from "../../middlewares/authorization/auth.verify";

const bookingRouter = Router();

bookingRouter.post("/book-class", authVerifyAccess.authVerify(["user", "admin"]), bookingController.bookClass as any);
bookingRouter.put("/edit-booking", authVerifyAccess.authVerify(["user", "admin"]), bookingController.editBooking as any);
bookingRouter.delete("/delete-booking/:classId", authVerifyAccess.authVerify(["user", "admin"]), bookingController.deleteBooking as any);

export default bookingRouter;
