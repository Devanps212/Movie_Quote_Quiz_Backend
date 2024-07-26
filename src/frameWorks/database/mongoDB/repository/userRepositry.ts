import { userModelType } from "../models/userModel";
import { userEntity } from "../../../../entities/user";


export const userRepository = (model: userModelType)=>{

    const uEntity = new userEntity(model)

    const saveUser = async(name: string, score: number)=>{
        return await uEntity.saveUser(name, score)
    }

    const allUsers = async()=>{
        return await uEntity.allUsers()
    }

    return {
        saveUser,
        allUsers
    }
}

export type userRepositoryType = typeof userRepository