import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'
import bodyparser from 'body-parser'
import helmet from 'helmet'
import mongoConnect from './frameWorks/database/mongoDB/connection'

dotenv.config()

const corsOptions = {
    origin: "*",
    exposedHeaders: [
        "Cross-Origin-Opener-Policy",
        "Cross-Origin-Resource-Policy",
        "Access-Control-Allow-Origin",
    ],
}

const app = express()
const port  = process.env.PORT || 3000

app.use(cors(corsOptions))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json({limit: '10mb'}))
app.use(morgan('dev'))
app.use(express.urlencoded({limit:'10mb', extended: true}))
app.use(helmet({xssFilter: true}))
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}))
app.use((req, res, next:NextFunction)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next()
})
mongoConnect()

app.get('/', (req: Request, res: Response)=>{
    res.send("hello")
})

app.listen(port, ()=>{
    console.log(`connected to PORT ${port}`)
})