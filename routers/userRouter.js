import express from "express";
import routes from "../routes";
import { getUsers, postUsers, userDetail, editProfile, changePassword } from "../controllers/userController";
const userRouter = express.Router();


userRouter.get("/", getUsers);
userRouter.post("/", postUsers);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;