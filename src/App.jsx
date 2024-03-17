import { useState } from "react"
import Form from "./components/Form/Form"
import TaskList from "./components/TaskList/TaskList"
import EditForm from "./components/EditForm/EditForm"



function App() {
  const [tasks,setTasks] = useState([])

  const [isEditing, setIsEditing] = useState(false)

  const [editingTask , setEditingTask] = useState(null)

  const [prevElFocus , setPrevElFocus] = useState(null)

  function addTask(task) {
    setTasks((prev) => [task,...prev])
  }

  function deleteTask(id) {
    setTasks(tasks.filter(item => item.id !== id))
  }

  function toggleCheck(id){
    setTasks((prev) => prev.map(item => item.id == id ? {...item , checked: !item.checked} : item))
  }

  function showEditModal(task) {
    setEditingTask(task)
    setIsEditing(true)
    setPrevElFocus(document.activeElement)
  }

  function editTask(task) {
    setTasks((prev) => prev.map(item => (item.id === task.id)?{...item, name: task.name}:item))
    closeEditModal()
  }

  function closeEditModal() {
    setIsEditing(!isEditing)
    prevElFocus.focus()
  }



  return (
    <div className="container">
      <header>To Do List</header>
      {isEditing&&<EditForm editingTask={editingTask} editTask={editTask} closeEditModal={closeEditModal}/>}
      <Form addTask={addTask}/>
      <TaskList tasks={tasks} toggleCheck={toggleCheck} deleteTask={deleteTask} showEditModal={showEditModal} />
    </div>
  )
}

export default App
