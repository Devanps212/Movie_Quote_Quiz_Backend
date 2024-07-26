import { userInterfaceType } from "../../app/interfaces/userInterface";
import { userRepositoryType } from "../../frameWorks/database/mongoDB/repository/userRepositry";
import { userModelType } from "../../frameWorks/database/mongoDB/models/userModel";
import asynchandler from 'express-async-handler'
import { Request, Response } from "express";
import { allUsers, saveUsers } from "../../app/useCase/userUsecase";

export const userController = (
    userInterface : userInterfaceType,
    userRepository: userRepositoryType,
    userModel: userModelType
)=>{
    
    const userService = userInterface(userRepository(userModel))

    const users = asynchandler(
        async(req: Request, res: Response)=>{
            console.log("hello")
            console.log("reached finding questions")
            const data = await allUsers(userService)
            res.json({
                status: "200",
                data
            })
        }
    )

    const userSave = asynchandler(
        async(req: Request, res: Response)=>{
            const { name, score } = req.body
            console.log("hello")
            console.log("reached finding questions")
            const data = await saveUsers(userService ,name, score)
            res.json({
                status: "200",
                data
            })
        }
    )

    return{
        userSave,
        users
    }
}