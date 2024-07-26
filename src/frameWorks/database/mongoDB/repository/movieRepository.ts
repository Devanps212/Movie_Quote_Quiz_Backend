import { movieModelType } from "../models/movieModel";
import { MoviesEntity } from "../../../../entities/movies";


export const movieRepository = (model: movieModelType)=>{

    const mentity = new MoviesEntity(model)

    const questionFinder = async()=>{
        return await mentity.quotefinder()
    }

    return{
        questionFinder
    }
}

export type movieRepositoryType = typeof movieRepository
