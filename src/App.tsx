import Header from "./components/header";
import TasksList from "./components/taskList";

function App() {
	const tasks = [
		{
			id: "testee1",
			description: "test the task description size in this application",
			isComplited: false
		},
		{
			id: "testee2",
			description: "test the task description size in this application",
			isComplited: false
		},
		{
			id: "testee3",
			description: "test the task description size in this application",
			isComplited: false
		},
		{
			id: "testee4",
			description: "test the task description size in this application",
			isComplited: false
		},
		{
			id: "testee1",
			description: "test the task description size in this application",
			isComplited: true
		},
		{
			id: "testee2",
			description: "test the task description size in this application",
			isComplited: true
		},
		{
			id: "testee3",
			description: "test the task description size in this application",
			isComplited: true
		},
		{
			id: "testee4",
			description: "test the task description size in this application",
			isComplited: true
		},
	];

	return (
		<div>
			<Header />
			<TasksList tasks={tasks}/>
		</div>
	);
}

export default App;
