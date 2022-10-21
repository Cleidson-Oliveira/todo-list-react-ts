import { useState } from "react";

export function NewTask() {
	const [newTaskInputValue, setNewTaskInputValue] = useState("");
	return ( 
		<div>
			<input 
				type="text" 
				value={newTaskInputValue} 
				onChange={(e)=>setNewTaskInputValue(e.target.value)}
			/>
			<button>Criar</button>
		</div>
	);
}