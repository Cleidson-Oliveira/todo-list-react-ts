import { useContext } from "react";
import { TaskContext } from "../../contexts/tasks/context";
import { Task } from "../task";

import style from "./style.module.css";

function TasksList() {

	const { tasks, complitedTasksAmount } = useContext(TaskContext);

	return ( 
		<div className={style.taskList}>
			<header>
				<span>
					<p>Tarefas criadas</p>
					<p className={style.counter}>{tasks.length}</p>
				</span>
				<span>
					<p>Concluídas</p>
					<p className={style.counter}>
						{complitedTasksAmount > 0 ? `${complitedTasksAmount} de ${tasks.length}` : 0}
					</p>
				</span>
			</header>
			{tasks.length === 0	
				? <div>
					<img src="./clipboard.svg" alt="" />
					<span>
						<b>Você ainda não tem tarefas cadastradas</b><br />
						Crie tarefas e organize seus itens a fazer
					</span>
				</div>
				: <ul>
					{tasks?.map((task) => (
						<Task key={task.id} task={task}/>
					))}
				</ul>
			}
		</div>
	);
}

export default TasksList;