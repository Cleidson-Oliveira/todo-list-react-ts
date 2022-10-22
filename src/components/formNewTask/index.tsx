import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../../contexts/tasks/context";

import style from "./style.module.css";

import { PlusCircle } from "phosphor-react";

export function NewTask() {
	const [newTaskInputValue, setNewTaskInputValue] = useState("");
	const { createTask } = useContext(TaskContext);

	const handleAddNewTask = () => {
		if (newTaskInputValue == "") {
			toast.error("Você deve incluir uma descrição para a tarefa!");
		} else {
			createTask(newTaskInputValue); 
			setNewTaskInputValue("");
		}
	};
	
	return ( 
		<div className={style.newTask}>
			<input 
				type="text" 
				placeholder="Adicione uma nova tarefa"
				value={newTaskInputValue} 
				onChange={(e)=>setNewTaskInputValue(e.target.value)}
			/>
			<button onClick={handleAddNewTask}>
				Criar
				<PlusCircle weight="bold" color="white" />
			</button>
		</div>
	);
}