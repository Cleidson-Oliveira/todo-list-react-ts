import { Check, Trash } from "phosphor-react";
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
	return ( 
		<li className={style.task}>
			{task.isComplited
				? <button className={style.check}><Check/></button>
				: <button className={style.uncheck}></button>
			}
			<p className={task.isComplited ? style.descriptiontaskcomplited : style.description}>
				{task.description}
			</p>
			<button className={style.trash}><Trash/></button>
		</li>
	);
}