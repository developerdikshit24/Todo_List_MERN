import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from "../utils/ApiResponse.js"
import { Todo } from "../models/newTodo.model.js"
import mongoose from "mongoose"

const addTodo = asyncHandler(async (req, res) => {
    const { newTodo } = req.body
    if (newTodo.trim() == '') throw new ApiError(400, "Todo is required")
    const todo = await Todo.create({
        todo: newTodo
    })
    const NewTodo = await Todo.findById(todo._id)
    if (!NewTodo) throw new ApiError(500, "Something went wrong while adding Todo")

    return res.status(200).json(
        new ApiResponse(200, NewTodo, "Todo Add successfully")
    )
})

const getTodos = asyncHandler(async (req, res) => {
    try {
        const todos = await Todo.find()
        return res.status(200)
            .json(new ApiResponse(200, todos, "Todos Fetch Successfully"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong to fetch data")
    }
})

const completedTask = asyncHandler(async (req, res) => {
    const { completeTodoId } = req.body
    if (!completeTodoId || completeTodoId.trim() === '') {
        throw new ApiError(400, "Todo ID is required");
    }
    const id = new mongoose.Types.ObjectId(completeTodoId)
    try {
        const todo = await Todo.findById(id)
        if (!todo) throw new ApiError(500, "Todo not found")
        todo.isCompleted = !todo.isCompleted
        const updated = await todo.save()

        return res.status(200)
            .json(new ApiResponse(200, updated, "Todo add successfully"))

    } catch (error) {
        throw new ApiError(500, "Something went wrong while performing action")
    }
})


const deleteTodo = asyncHandler(async (req, res) => {
    const { todoId } = req.body
    if (!todoId) throw new ApiError(400, "All Fields Required")
    const id = new mongoose.Types.ObjectId(todoId)
    try {
        await Todo.findByIdAndDelete(id)
        return res.status(200)
            .json(new ApiResponse(200, "Todo Delete Successfully"))
    } catch (error) {
        throw new ApiError(500, "Something went Wrong while deleting Todo")
    }
})


const getTodoById = asyncHandler(async (req, res) => {
    const { todoId } = req.body
    try {
        if (todoId.trim() === "") throw new ApiError(400, "Id is required")
        const id = new mongoose.Types.ObjectId(todoId)
        const todo = await Todo.findById(id)
        if (!todo) throw new ApiError(400, "Todo Not Found")
        return res.status(200)
        .json(new ApiResponse(200, todo, "Todo fetch successfully"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching todo")
    }
})

export {
    addTodo,
    deleteTodo,
    completedTask,
    getTodos,
    getTodoById
}