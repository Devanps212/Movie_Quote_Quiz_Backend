import { movieInterfaceType } from "../interfaces/movieInterface";

export const questionFinder = async(movieInterface: ReturnType<movieInterfaceType>)=>{
        return await movieInterface.questionsFinder()
}