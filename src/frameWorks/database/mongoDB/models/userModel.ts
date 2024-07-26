import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    score:{
        type: Number,
        default: 0
    }
})

export const userModel = mongoose.model("Users", userSchema)

export type userModelType = typeof userModel