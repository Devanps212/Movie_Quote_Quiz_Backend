import { userModelType } from "../frameWorks/database/mongoDB/models/userModel";
import { userInter } from "../utils/interface/userInterface";


export class userEntity{
    private model : userModelType

    constructor(model: userModelType){
        this.model = model
    }

    public async saveUser(userName: string, score: number) : Promise<userInter>{
        try{
            const result = await this.model.create({
                name: userName,
                score: score
            })
    
            return result

        } catch(error: any){
            throw new Error(error.message)
        }
    }

    public async allUsers() : Promise<userInter[]>{
        try{
            const result = await this.model.find()
    
            return result

        } catch(error: any){
            throw new Error(error.message)
        }
    }
}