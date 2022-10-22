import { createContext } from "react";

import { ITask } from "../../components/task";

interface ITasksContext {
    complitedTasksAmount: number,
    tasks: ITask[],
    createTask: (description: string) => void,
    deleteTask: (id: string) => void,
    setTaskAsComplited: (id: string) => void,
}

export const TaskContext = createContext({} as ITasksContext);