import {useState} from 'react'
import {Link} from 'react-router-dom'
import {LIST_TYPES, LIST_COLORS} from '../../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import css from './List.module.css'
import Task from "../task/task";

const List = props => {
    const {type, title, tasks, addNewTask} = props
    const [isFormVisible, setFormVisible] = useState(false)

    const handleAddNewClick = () => {
        setFormVisible(!isFormVisible)
    }

    const formSubmit = (title, description) => {
        addNewTask(title, description)
        setFormVisible(false)
    }

    return (
        <div className={css.list}>
            <h2 className={css.listTitle}>{title}</h2>
            {tasks.length ?
                tasks.map(task =>

                        <div>
                            <Task taskId={task.id} backgroundColor={LIST_COLORS[task.status]} title={task.title}></Task>
                        </div>
                    // <Task id={task.id} backgroundColor={LIST_COLORS[task.status]} title={task.title}></Task>
                    // <Link  key={task.id}>
                    // 	<div className={css.task} style={{background: LIST_COLORS[task.status]}}>{task.title}</div>
                    // </Link>
                ) :
                <p>No tasks added yet</p>
            }
            {type === LIST_TYPES.BACKLOG &&
                <button onClick={handleAddNewClick} className={css.addButton}>+ Add new task</button>}
            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <FormAddNewTask formSubmit={formSubmit}/>
            )}
        </div>
    )
}

export default List
