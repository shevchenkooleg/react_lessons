import {TaskType} from "../Todolist"


export const TaskReducer = (state: Array<TaskType>, action: tasksReducerType): Array<TaskType> => {
    switch (action.title) {
        case "REMOVE-TASKS": {
            // let filteredTasks = tasks.filter(t => t.id != id);
            // setTasks(filteredTasks);
            return state.filter(t => t.id != action.payload.id)
        }

        case "ADD-TASK": {
            let newTask = { id: action.payload.newID, title: action.payload.title, isDone: false };
            // let newTasks = [task, ...tasks];
            // setTasks(newTasks);
            return [newTask, ...state]
        }

        default:
            return state
    }
}

type tasksReducerType = removeTaskACType | addTaskACType
export type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string) => {
    return {
        title: 'REMOVE-TASKS',
        payload: {id}
    } as const
}

export type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title:string, newID:string) => {
    return {
        title: 'ADD-TASK',
        payload: {
            title: title,
            newID: newID
        }
    } as const
}