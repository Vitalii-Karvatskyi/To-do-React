import { CheckIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function EditForm({ editingTask, editTask, closeEditModal }) {

    const { name: taskName } = editingTask

    const [editingTaskName, setEditingTaskName] = useState(taskName)


    useEffect(() => {
        function closeModalWithEsc(e) {
            e.key === "Escape" && closeEditModal()
        }
        window.addEventListener("keydown", closeModalWithEsc)
        return () => {
            window.removeEventListener("keydown", closeModalWithEsc)
        }
    }, [closeEditModal])
    
    function handleSubmit(e) {
        e.preventDefault()
        editTask({ ...editingTask, name: editingTaskName })
    }

    function closeModal(e) {
        e.target === e.currentTarger && closeEditModal()
        console.log("click")
    }

    return (
        <div role="dialog" aria-labelledby="editingTaskName" onClick={(e) => closeModal(e)}>
            <form className="todo" onSubmit={handleSubmit}>
                <div className="wrapper">
                    <input type="text" className="input" value={editingTaskName} placeholder="Edit task" maxLength={50} onChange={(e) => setEditingTaskName(e.target.value)} />
                    <label htmlFor="" className="label">Edit task</label>
                </div>
                <button className="btn" type="submit" aria-label="Edit task"><CheckIcon strokeWidth={2} width={24} height={24} /></button>
            </form>
        </div>
    )
}