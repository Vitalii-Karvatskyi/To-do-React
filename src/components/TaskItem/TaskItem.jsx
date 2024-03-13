import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import styles from "./TaskItem.module.css"

export default function TaskItem({item , toggleCheck}) {
    const {name,
        id,
        checked
    } = item
    return(
        <li className={styles.task}>
            <div className={styles["task-group"]}>
                <input type="checkbox" className={styles.checkbox} id={id} name={name} onChange={() => toggleCheck(id)}/>
                <label htmlFor={id} className={styles.label}>
                    {name}
                    <p className={styles.checkmark}><CheckIcon strokeWidth={2} width={24} height={24}/></p>
                </label>
                
            </div>
            <div className={styles["task-group"]}>
                <button className="btn" aria-label={`update ${name} task`}><PencilIcon width={24} height={24}/></button>
                <button className={`btn ${styles.delete}`} aria-label={`delete ${name} task`}><TrashIcon width={24} height={24}/></button>

            </div>
        </li>
    )
}