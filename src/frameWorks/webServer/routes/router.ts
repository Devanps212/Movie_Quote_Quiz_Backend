import { movieInterface } from "../../../app/interfaces/movieInterface";
import { movieRepository } from "../../database/mongoDB/repository/movieRepository";
import { movieModel } from "../../database/mongoDB/models/movieModel";
import { userInterface } from "../../../app/interfaces/userInterface";
import { userRepository } from "../../database/mongoDB/repository/userRepositry";
import { userModel } from "../../database/mongoDB/models/userModel";
import { movieController } from "../../../adapter/controller/movieController";
import { userController } from "../../../adapter/controller/userController";
import express from 'express'

const mainRoute = ()=>{

    const Mcontroller = movieController(movieInterface, movieRepository, movieModel)
    const Ucontroller = userController(userInterface, userRepository, userModel)


    console.log("reached router")
    const router = express.Router()

    console.log("nest midddleware")
    router.get('/questions', Mcontroller.questions)
    router.get('/users', Ucontroller.users)
    router.post('/save', Ucontroller.userSave)

    return router
}

export default mainRoute