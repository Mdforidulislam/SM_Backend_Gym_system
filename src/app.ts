import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./modules/users/user.route";
import classRoute from "./modules/classes/classess.route";
import bookingRouter from "./modules/booking/booking.route";
import authRouter from "./modules/auth/auth.route";


const app = express();

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));



// route start
app.use("/api/v1", userRoute);
app.use("/api/v1", classRoute);
app.use("/api/v1", bookingRouter); 
app.use("/api/v1", authRouter);
// route end


// Catch-all for undefined routes
app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Resource not found",
    error: {
      method: req.method,
      url: req.originalUrl,
    },
  });
});

export default app;
