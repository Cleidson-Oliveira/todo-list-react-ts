import Header from "./components/header";
import TasksList from "./components/taskList";
import { TasksProvider } from "./contexts/tasks/provider";

function App() {
	return (
		<TasksProvider>
			<Header/>
			<TasksList/>
		</TasksProvider>
	);
}

export default App;
