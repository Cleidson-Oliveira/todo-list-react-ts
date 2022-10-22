import { Check, Trash } from "phosphor-react";
import { useContext } from "react";
import { TaskContext } from "../../contexts/tasks/context";
import style from "./style.module.css";

export interface ITask {
    id: string,
    description: string,
    isComplited: boolean
}

interface TaskProps { 
	task: ITask
}

export function Task ({ task }: TaskProps) {
	const { deleteTask, setTaskAsComplited } = useContext(TaskContext);
	return ( 
		<li className={style.task}>
			{task.isComplited
				? <button onClick={() => setTaskAsComplited(task.id)} className={style.check}><Check/></button>
				: <button onClick={() => setTaskAsComplited(task.id)} className={style.uncheck}></button>
			}
			<p className={task.isComplited ? style.descriptiontaskcomplited : style.description}>
				{task.description}
			</p>
			<button onClick={() => deleteTask(task.id)} className={style.trash}><Trash/></button>
		</li>
	);
}