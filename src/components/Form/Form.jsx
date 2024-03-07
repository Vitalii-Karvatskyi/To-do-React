/* eslint-disable react/prop-types */
import { PlusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Form({ addTask }) {
    const [task,setTask] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        addTask({
            name:task,
            checked: false,
            id: Date.now() 
        })
        setTask("")
    }

  
    return(
        <form onSubmit={handleSubmit} className='todo' >
            <div className="wrapper">
                <input value={task} onChange={(e)=> setTask(e.target.value)} className='input' type="text" required placeholder='Enter task' maxLength={100}/>
                <label className='label' htmlFor="task">Enter task</label>
            </div>
            <button aria-label='Add Task' className='btn' type='Submit'><PlusIcon/></button>
        </form>
    )
}