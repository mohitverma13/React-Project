
// // import React from "react"
// import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';
// import Navbar from "./components/Navbar";


// function App() {
//     const [todo, setTodo] = useState("")
//     const [todos, setTodos] = useState([])



//     const handleEdit = (e, id) => {
//         let t = todos.filter(i => i.id === id)
//         setTodo(t[0].todo)
//         let newTodos = todos.filter(item => {
//             return item.id !== id
//         });
//         setTodos(newTodos)
//         // saveToLS()
//     }

//     const handleDelete = (e, id) => {
//         let newTodos = todos.filter(item => {
//             return item.id !== id;
//         })
//         setTodos(newTodos);
//         console.log(newTodos)
//     }

//     const handleAdd = () => {
//         // setTodos([...todos, { id: uuidv4(),todo,isCompleted:false}])
//         // setTodo('')
//         // console.log(todos)

//         if (todo.trim()) { // Check if the input field is not empty
//             setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
//             setTodo(''); // Clear the input field after adding the todo

//         }

//     }
//     const handleChange = (e) => {
//         setTodo(e.target.value)
//     }


//     const handleCheckbox = (e) => {
//         console.log(e, e.target)
//         let id = e.target.name;
//         console.log(`This is id ${id}`)
//         let index = todos.findIndex(item => {
//             return item.id === id;
//         })
//         console.log(`This is id ${index}`)
//         // let newTodos=todos; ----------> here due to reference line through is int striked
//         let newTodos = [...todos]
//         newTodos[index].isCompleted = !newTodos[index].isCompleted
//         setTodos(newTodos)
//     }


//     return (
//         <>
//             <Navbar />
//             <div className="container mx-auto bg-violet-200 rounded-xl my-5 p-5 min-h-[80vh] ">
//                 <div className="addTodo  my-6">
//                     <h2 className="text-xl font-bold">Add Todo</h2>

//                     <input onChange={handleChange} value={todo} type="text" className="w-[25em] rounded-md " />

//                     <button onClick={handleAdd} className="bg-violet-500 hover:bg-violet-900 rounded-md p-2 py-1 mx-5 text-white text-sm font-bold">Add</button>
//                 </div>

//                 <h2 className="text-xl font-bold">Your Todos</h2>


//                 <div className="todos  ">
//                     {todos.length === 0 && <div>No todos to display</div>}
//                     {todos.map(item => {

//                         return <div key={item.id} className="todo flex gap-10 justify-between" >
//                             <input name={item.id} onChange={handleCheckbox} type="checkbox" id="" checked={item.isCompleted} />
//                             <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
//                             <div className="buttons">
//                                 <button onClick={(e) => handleEdit(e, item.id)} className="bg-violet-500 hover:bg-violet-900 rounded-md p-2 py-1 mx-1 text-white text-sm font-bold" >Edit</button>
//                                 <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-violet-500 hover:bg-violet-900 rounded-md p-2 py-1 mx-1 text-white text-sm font-bold">Delete</button>
//                             </div>
//                         </div>
//                     })}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default App


import { useState } from 'react';
// import { AiFillDelete } from "react-icons/ai";
// import { FaEdit } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/Navbar';

function App() {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    // const [showFinished, setshowFinished] = useState(true)

    // useEffect(() => {
    //   let todoString = localStorage.getItem("todos")
    //   if (todoString) {
    //     let todos = JSON.parse(localStorage.getItem("todos"))
    //     setTodos(todos)
    //   }
    // }, [])


    // const saveToLS = (params) => {
    //   localStorage.setItem("todos", JSON.stringify(todos))
    // }

    // const toggleFinished = (e) => {
    //   setshowFinished(!showFinished)
    // }




    const handleEdit = (e, id) => {
        let t = todos.filter(i => i.id === id)
        setTodo(t[0].todo)
        let newTodos = todos.filter(item => {
            return item.id !== id
        });
        setTodos(newTodos)
        // saveToLS()
    }

    const handleDelete = (e, id) => {
        let newTodos = todos.filter(item => {
            return item.id !== id
        });
        setTodos(newTodos)
        // saveToLS()
    }

    const handleAdd = () => {
        setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
        setTodo("")
        // saveToLS()
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleCheckbox = (e) => {
        let id = e.target.name;
        let index = todos.findIndex(item => {
            return item.id === id;
        })
        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos)
        // saveToLS()
    }


    return (
        < >
            <Navbar />
            <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%]">
                <h1 className='font-bold text-center text-3xl'>iTask - Manage your todos at one place</h1>
                <div className="addTodo my-5 flex flex-col gap-4">
                    <h2 className='text-2xl font-bold'>Add a Todo</h2>
                    <div className="flex">

                        <input onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-1' />
                        <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white'>Save</button>
                    </div>
                </div>
                <input className='my-4' id='show' /*onChange={toggleFinished} */ type="checkbox" /**checked={showFinished} */ />
                <label className='mx-2' htmlFor="show">Show Finished</label>
                <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
                <h2 className='text-2xl font-bold'>Your Todos</h2>
                <div className="todos">
                    {todos.length === 0 && <div className='m-5'>No Todos to display</div>}
                    {todos.map(item => {

                        return <div key={item.id} className={"todo flex my-3 justify-between"}>
                            <div className='flex gap-5'>
                                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
                                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                            </div>
                            <div className="buttons flex h-full">
                                <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'></button>
                                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'></button>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        </>
    )
}

export default App