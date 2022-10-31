import { Check, Trash } from "phosphor-react";
import { useContext } from "react";
import { TaskContext } from "../../contexts/tasks/context";
import style from "./style.module.css";

export interface ITask {
    id: string,
    description: string,
    isCompleted: boolean
}

interface TaskProps { 
	task: ITask
}

export function Task ({ task }: TaskProps) {
	const { deleteTask, setTaskAsCompleted } = useContext(TaskContext);
	return ( 
		<li className={style.task}>
			{task.isCompleted
				? <button onClick={() => setTaskAsCompleted(task.id)} className={style.check}><Check/></button>
				: <button onClick={() => setTaskAsCompleted(task.id)} className={style.uncheck}></button>
			}
			<p className={task.isCompleted ? style.descriptiontaskcompleted : style.description}>
				{task.description}
			</p>
			<button onClick={() => deleteTask(task.id)} className={style.trash}><Trash/></button>
		</li>
	);
}