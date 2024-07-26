import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    quote:{
        type: String,
        required: true
    },
    options:{
        type: Array,
        required: true
    },
    hint:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        default:''
    },
    answer:{
        type: String,
        required: true
    }
})

export const movieModel = mongoose.model("Questions", movieSchema)

export type movieModelType = typeof movieModel