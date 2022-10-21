import { NewTask } from "../formNewTask";
import style from "./style.module.css";

function Header () {
	return ( 
		<header className={style.header}>
			<img src="/logo.svg" alt="ToDo list logo" />
			<NewTask />
		</header>
	);
}
 
export default Header;