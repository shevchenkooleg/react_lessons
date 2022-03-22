import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}
type TaskObjectType = {
    [ket:string]:Array<TaskType>
}


function App() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });
    let [filter, setFilter] = useState<FilterValuesType>("all");


    function removeTask(todolistID:string, id: string) {
        console.log(todolistID)
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(el=>el.id !== id)})
    }

    function addTask(todolistID:string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistID]:[newTask, ...tasks[todolistID]]});
    }

    function changeStatus(todolistID:string, taskId: string, isDone: boolean) {

        setTasks({...tasks, [todolistID]:tasks[todolistID].map(el=> el.id === taskId ? {...el, isDone:isDone}: el )});
    }


    function changeFilter(todolistID:string, value: FilterValuesType) {
        setTodoLists(todoLists.map(el=>el.id === todolistID ? {...el, filter:value} : el))
    }

    function removeTodolist(todolistID:string) {
        setTodoLists(todoLists.filter(el=> el.id !== todolistID))
        delete tasks[todolistID]
        console.log(todolistID)
    }


    return (
        <div className="App">
            {todoLists.map(el => {

                let tasksForTodolist = tasks[el.id];

                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                }

                return (
                    <Todolist
                        key={el.id}
                        todolistID={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={el.filter}
                        removeTodolist={removeTodolist}
                    />
                )
            })}

        </div>
    );
}

export default App;
