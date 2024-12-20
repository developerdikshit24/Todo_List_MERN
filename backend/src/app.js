import express from "express"
import cors from "cors"
import todoRouter from "./routes/todos.route.js"
const app = express()
app.use(express.json());
app.use(cors({
    origin: '*',
    credentials:true
}))

app.use("/api/v1/todo", todoRouter)
export {app}