import Header from "./components/header";
import TasksList from "./components/taskList";
import { TasksProvider } from "./contexts/tasks/provider";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<TasksProvider>
			<Header/>
			<TasksList/>
			<ToastContainer 
				position="top-center"
				autoClose={3000}
				pauseOnHover
			/>
		</TasksProvider>
	);
}

export default App;
