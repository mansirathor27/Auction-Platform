import {User} from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import Errorhandler from "./error.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";

// Protecting routes
export const isAuthenticated = catchAsyncErrors(async(req, res, next)=>{
    const token = req.cookies.token;
    if(!token){
        return next(new Errorhandler("Please login to access this resource",400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    next();
});