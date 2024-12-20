import mongoose, { Schema} from "mongoose";
const todoSchema = new Schema({
    todo: {
        type: String,
        require: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
},{timestamps:true})

export const Todo = mongoose.model("Todo", todoSchema)