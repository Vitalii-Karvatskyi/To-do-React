import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css"

export default function TaskList({ tasks , toggleCheck}) {

    return(
        <ul className={styles.tasks}>
            {tasks.map(item => (<TaskItem item={item} key={item.id} toggleCheck= {toggleCheck}/>))}
        </ul>
        
        
    )
}