import { Sparkles } from 'lucide-react'
import React, { useState } from 'react'

function TodoListPage() {
  const [todoNew,setTodoNew]= useState([]);
  const [input,setInput]= useState("");
  const addTodo =() => {
    if(input.trim()){
      setTodoNew([...todoNew, {id: Date.now(),
        text:input, completed:false}])
        setInput("")
       
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-900">"
      <div className='w-2/5 border rounded-3xl p-8 mx-auto'>
        <h1 className='text-2xl mb-4 flex justify-between'>
          MY Todo !<Sparkles /></h1>
        <div className='mb-4 flex'>
           <input 
           value={input}
           onChange={(e)=> setInput(e.target.value)}
           type="text" 
           className="flex-grow px-3 py-2 border rounded-l-lg 
           focus:outline-none focus:ring-2 focus:ring-blue-500"
           placeholder ="new task"/>
           <button 
           onClick ={addTodo}
           className='bg-blue-500 text-white px-4 py-2 rounded-r-lg
           hover:bg-blue-600'>
            Add</button>
        </div>
        <ul className='space-y-2'>
            {
              todoNew.map((todo)=>(
                <li
                key={todo.id}
                className='flex items-center p-3
                rounded-lg bg-slate-100 border
                border-gray-200'
                >
                  <input type="checkbox"
                  checked={todo.completed}
                  onChange={()=> setTodoNew(
                    todoNew.map((t)=>(
                      t.id === todo.id? {...t,
                        completed: !t.completed}: t
                    ))
                  )} 
                  className='mr-2 h-5 w-5 text-blue-600'
                  />
                  <span
                  className={`flex-grow ${todo.completed ? 
                  "line-through text-gray-500":"text-gray-800"}`}>
                    {todo.text}</span>

                    <button
                    onClick={()=> setTodoNew(todoNew.filter
                   ((t)=> t.id !== todo.id))}
                   className='ml-2 border-none p-2 rounded-lg
                   bg-red-500 text-white
                    hover:bg-red-600'
                    >Delete</button>
                </li>
              ))
            }
        </ul>
      </div>
    </div>
  )
}

export default TodoListPage