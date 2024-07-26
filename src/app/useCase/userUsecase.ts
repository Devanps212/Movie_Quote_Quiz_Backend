import { userInterfaceType } from "../interfaces/userInterface"

export const allUsers = async(userInterface: ReturnType<userInterfaceType>)=>{
        return await userInterface.allUsers()
}

export const saveUsers = async(userInterface: ReturnType<userInterfaceType>, name: string, score:number)=>{
    return await userInterface.saveUser(name, score)
}