import { useState } from "react"
import Form from "./components/Form/Form"
import TaskList from "./components/TaskList/TaskList"



function App() {
  const [tasks,setTasks] = useState([])

  function addTask(task) {
    setTasks((prev) => [task,...prev])
  }


  function toggleCheck(id){
    setTasks((prev) => prev.map(item => item.id == id ? {...item , checked: !item.checked} : item))
  }

  return (
    <div className="container">
      <header>To Do List</header>
      <Form addTask={addTask}/>
      <TaskList tasks={tasks} toggleCheck={toggleCheck}/>
    </div>
  )
}

export default App
