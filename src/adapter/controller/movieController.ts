import { movieInterfaceType } from "../../app/interfaces/movieInterface";
import { movieRepositoryType } from "../../frameWorks/database/mongoDB/repository/movieRepository";
import { movieModelType } from "../../frameWorks/database/mongoDB/models/movieModel";
import asynchandler from 'express-async-handler'
import { Request, Response } from "express";
import { questionFinder } from "../../app/useCase/movieUsecase";

export const movieController = (
    movieInterface : movieInterfaceType,
    movieRepository: movieRepositoryType,
    movieModel: movieModelType
)=>{
    
    const movieService = movieInterface(movieRepository(movieModel))

    const questions = asynchandler(
        async(req: Request, res: Response)=>{
            console.log("hello")
            console.log("reached finding questions")
            const data = await questionFinder(movieService)
            res.json({
                status: "200",
                data
            })
        }
    )

    return{
        questions
    }
}