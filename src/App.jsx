import { useState } from "react"
import Form from "./components/Form/Form"


function App() {
  const [tasks,setTasks] = useState([])

  function addTask(task) {
    setTasks((prev) => [task,...prev])
  }
  console.log(tasks)
  return (
    <div className="container">
      <header>To Do List</header>
      <Form addTask={addTask}/>

    </div>
  )
}

export default App
