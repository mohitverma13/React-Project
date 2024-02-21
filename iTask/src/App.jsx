import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Navbar from "./components/Navbar";


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(false)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)

    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    saveToLocalStorage()
    setTodos(newTodos)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos);
    console.log(newTodos)
    saveToLocalStorage()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)

    // if (todo.trim()) { // Check if the input field is not empty
    //   setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    //   setTodo(''); // Clear the input field after adding the todo

    // }
    saveToLocalStorage()

  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }


  const handleCheckbox = (e) => {
    console.log(e, e.target)
    let id = e.target.name;
    console.log(`This is id ${id}`)
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    console.log(`This is id ${index}`)
    // let newTodos=todos; ----------> here due to reference line through is int striked
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLocalStorage()
  }


  return (
    <>
      <Navbar />
      <div className=" select-none mx-3 md:container md:mx-auto bg-violet-200 rounded-xl my-5 p-5 min-h-[80vh] md:w-[35%] border-4 border-gray-500">
        <h1 className='font-bold text-center text-3xl title '>iTask - Manage your todos at one place</h1>

        <div className="addTodo my-25 flex flex-col gap-4 mt-8 text-center">
          <h2 className="text-xl font-bold mb-0">Add Todo</h2>
          <div className="flex">
            <input placeholder="Enter your task" onChange={handleChange} value={todo} type="text" className="w-[25em] rounded-md text-center" />

            <button onClick={handleAdd} disabled={todo.length < 2} className="bg-violet-500 hover:bg-violet-900 rounded-md p-2 py-1 mx-5 text-white text-sm font-bold disabled:bg-red-600 hover:scale-125 transition-all duration-500 ease-in-out">Save</button>
          </div>
        </div>

        <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} />
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <h2 className="text-xl font-bold text-center">Your Todos</h2>


        <div className="todos  ">
          {todos.length === 0 && <div>No todos to display</div>}
          {todos.map(item => {

            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex gap-10 justify-between" >
              <div className="flex gap-4">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" id="" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through text" : "text"}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => handleEdit(e, item.id)} className="bg-violet-500 hover:bg-violet-900 rounded-md p-2 py-1 mx-1 text-white text-sm font-bold  hover:scale-125 transition-all duration-500 ease-in-out" ><FaEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-violet-500 hover:bg-violet-900 rounded-md p-2 py-1 mx-1 text-white text-sm font-bold  hover:scale-125 transition-all duration-500 ease-in-out"><AiFillDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
