import { useState } from "react";
import { PlusCircle } from "phosphor-react";

import style from "./style.module.css";

interface NewTaskInputValueProps {
	fn: (description: string) => void
}

export function NewTask({ fn }: NewTaskInputValueProps) {
	const [newTaskInputValue, setNewTaskInputValue] = useState("");
	return ( 
		<div className={style.newTask}>
			<input 
				type="text" 
				placeholder="Adicione uma nova tarefa"
				value={newTaskInputValue} 
				onChange={(e)=>setNewTaskInputValue(e.target.value)}
			/>
			<button onClick={() => fn(newTaskInputValue)}>
				Criar
				<PlusCircle weight="bold" color="white" />
			</button>
		</div>
	);
}