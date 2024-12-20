import { Router } from "express"
import {
    addTodo,
    deleteTodo,
    completedTask,
    getTodos,
    getTodoById
 } from "../controllers/Todo.controller.js"

const router = Router()
router.route("/addTodo").post(addTodo)
router.route("/deleteTodo").post(deleteTodo)
router.route("/completedTask").post(completedTask)
router.route("/getTodos").post(getTodos)
router.route("/getTodoById").post(getTodoById)
export default router


