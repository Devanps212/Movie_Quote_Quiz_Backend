import { movieModelType } from "../frameWorks/database/mongoDB/models/movieModel";
import { movie } from "../utils/interface/movieInterface";

export class MoviesEntity{

    private model : movieModelType
    constructor(model: movieModelType){
        this.model = model
    }

    public async quotefinder(): Promise<movie[]> {
        try{
            const questions = await this.model.aggregate([{
                $sample: {size: 8}
            }])

            return questions
        } catch(error: any){
            console.log(error)
            throw new Error(error.message)
        }
    }
}