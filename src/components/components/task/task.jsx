import {Link} from "react-router-dom";
import c from "./style.module.css";

const Task = ({taskId, title, backgroundColor}) => {

    const link = `/tasks/${taskId}`;

    return (
        <Link to={link} className={c.link}>
            <div className={c.task} style={{background: backgroundColor}}>{title}</div>
        </Link>
    )
}

export default Task;