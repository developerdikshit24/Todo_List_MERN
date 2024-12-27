import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { fetchUrl } from "../constant.jsx"
const Todo = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [taskFinished, setTaskFinished] = useState(false)

    const handelAdd = async (e) => {
        e.preventDefault()
        if (todo.trim() == '') return alert("Todo is empty");
        await axios.post(`${fetchUrl}addTodo`, { newTodo: todo })
        setTodo("")
    }

    const handelEdit = async (e) => {
        const response = await axios.post(`${fetchUrl}getTodoById`,
            { todoId: e.target.name }
        )
        setTodo(response.data.data.todo)
        handelDelete(e)
    }
    const handelDelete = async (e) => {
        const response = await axios.post(`${fetchUrl}deleteTodo`, {
            todoId: e.target.name
        })
        if (response.status > 400) return console.log("Something went wrong while deleting task")
    }

    const getTodo = async () => {
        const response = await axios.post(`${fetchUrl}getTodos`)
        setTodos(response.data.data)
    }

    useEffect(() => {
        getTodo()
    }, [handelAdd, handelEdit, handelDelete])

    const handelCheckbox = async (e) => {
        await axios.post(`${fetchUrl}completedTask`, { completeTodoId: e.target.name })
    }
    const toggleFinishedTaks = async () => {
        setTaskFinished(!taskFinished)
    }

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return (
        <div className="container max-w-3xl min-h-96 m-auto px-4 h-auto relative top-36 p-5 rounded-xl bg-purple-200">
            <h1 className='text-3xl font-bold text-center '>Todo List</h1>
            <p className='font-bold text-xl'>Add Todo:</p>
            <form className="inputbox flex gap-3 w-full px-0 py-2" >
                <input onChange={handleChange} value={todo} type="text" className='outline-none  rounded-xl px-3 w-full' placeholder='Add Todo' />
                <button disabled={todo.length <= 3} onClick={handelAdd} className=' disabled:bg-neutral-600 bg-purple-600 hover:bg-purple-800 active:bg-purple-950 px-1.5 py-1.5 font-bold
                 text-white w-14 rounded-xl border-2' type="submit" >Add</button>
            </form>
            <div className="check flex gap-1">
                <input type="checkbox" onChange={toggleFinishedTaks} checked={taskFinished} className='accent-purple-700 cursor-pointer' name="showFinished" />
                <label htmlFor='showFinished' className='text-sm text-neutral-700'>Show Finished</label>
            </div>
            <p className='text-center font-xs text-neutral-400'>_________________________________________________________________</p>
            <div className="yourTodos pt-2">
                <div className="text-xl font-bold py-2">Your Todos👇</div>
                <div className="todoContainer">
                    <div className='text-sm text-neutral-700 font-bold'>{todos.length === 0 && "No todos to display"}</div>
                    <ul>
                        {todos.map((items) => {
                            return (taskFinished || !items.isCompleted) && <li key={items._id} className='flex pb-2 gap-3 justify-between items-center'>
                                <div className="task flex gap-3">
                                    <input type="checkbox" name={items._id} onChange={handelCheckbox} checked={items.isCompleted} className='accent-purple-700 cursor-pointer' />
                                    <p className={items.isCompleted ? "line-through" : ""}>{items.todo}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <button onClick={handelEdit} type="button" name={items._id} className='bg-purple-600 hover:bg-purple-800 active:bg-purple-950 text-sm px-2 py-1 text-white rounded-md'>Edit</button>
                                    <button onClick={handelDelete} name={items._id} type="button" className='bg-purple-600 hover:bg-purple-800 active:bg-purple-950 text-sm px-2 py-1 text-white rounded-md'>Delete</button>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Todo
