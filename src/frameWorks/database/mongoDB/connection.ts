import mongoose from 'mongoose'

const mongoConnect = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Movies')
        console.log("connected to mongoDB")
    } catch(error:any){
        console.error(error.message)
        process.exit(1)
    }
}

export default mongoConnect