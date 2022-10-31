import { createContext } from "react";

import { ITask } from "../../components/task";

interface ITasksContext {
    completedTasksAmount: number,
    tasks: ITask[],
    createTask: (description: string) => void,
    deleteTask: (id: string) => void,
    setTaskAsCompleted: (id: string) => void,
}

export const TaskContext = createContext({} as ITasksContext);