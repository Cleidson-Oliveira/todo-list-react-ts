import { ITask, Task } from "../task";

import style from "./style.module.css";

interface TasksListProps{
    tasks: ITask[]
}

function TasksList({ tasks }: TasksListProps) {

	return ( 
		<div className={style.taskList}>
			<header>
				<span>
					<p>Tarefas criadas</p>
					<p className={style.counter}>{tasks.length}</p>
				</span>
				<span>
					<p>Concluídas</p>
					<p className={style.counter}>{tasks.length}</p>
				</span>
			</header>
			{tasks?.length === 0	
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