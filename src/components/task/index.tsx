import style from "style.module.css";

interface TaskProps {
    id: string,
    description: string,
    isComplited: boolean
}

export function Task (props: TaskProps) {
	return ( 
		<div className={style.task}>
			{props.isComplited && <button>check</button>}
			<p>{props.description}</p>
			<button></button>
		</div>
	);
}