import { movieRepositoryType } from "../../frameWorks/database/mongoDB/repository/movieRepository";


export const movieInterface = (movieRepository:ReturnType<movieRepositoryType>)=>{
    
    const questionsFinder = async()=>{
        return await movieRepository.questionFinder() 
    }

    return {
        questionsFinder
    }
}

export type movieInterfaceType = typeof movieInterface