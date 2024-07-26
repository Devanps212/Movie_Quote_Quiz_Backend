import { userRepositoryType } from "../../frameWorks/database/mongoDB/repository/userRepositry";


export const userInterface = (userRepo: ReturnType<userRepositoryType>)=>{
    const saveUser = async(name: string, score: number)=>{
        return await userRepo.saveUser(name, score)
    }

    const allUsers = async()=>{
        return await userRepo.allUsers()
    }

    return {
        saveUser,
        allUsers
    }
}

export type userInterfaceType = typeof userInterface