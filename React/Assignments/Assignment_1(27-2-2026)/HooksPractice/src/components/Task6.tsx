import React, { useReducer, useRef, useState } from 'react'
import Todo from './Todo';

type TodoType = {
    id: number,
    name: string,
    completed: boolean
}
type Action =
    | { type: "addTodo"; payload: { todo: string } };
const Task6 = () => {
    const [name, setName] = useState<string>("");
    const copyRef = useRef(null)
    function copyToClipboard() {
        window.navigator.clipboard.writeText(name)
        copyRef.current?.select()
    }

    const initialState: TodoType[] = []

    function reducer(todos: TodoType[],
        action: Action) {
        switch (action.type) {
            case "addTodo":

                console.log(todos)

                return [...todos, { id: Date.now(), name: action.payload.todo, completed: false }]

            default:
                return todos
        }
    }
    const [todos, dispatch] = useReducer(reducer, initialState)
    const [todo, setTodo] = useState<string>("");
    return (
        <>

            <h2 className="text-center text-bold text-4xl mt-4 mb-4">Task: 6</h2>
            <h4 className="text-center text-bold text-2xl mt-4 mb-4">useRef Example</h4>
            <div className='flex gap-3 mb-10'>
                <input
                    type="text"
                    className='border-2'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ref={copyRef}
                />

                <button
                    onClick={copyToClipboard}
                    className='border-2 rounded-2xl p-2 bg-blue-400'
                >Copy</button>

            </div>

            <h4 className="text-center text-bold text-2xl mt-4 mb-4">useReducer Example</h4>
            <div className='flex flex-col mb-10'>
                <div className='flex gap-2'>
                    <label htmlFor="todo">Add Task:</label>
                    <input
                        type="text"
                        value={todo}
                        id='todo'
                        className='border-2'
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button
                        className='border-2 rounded-2xl p-1 px-2'
                        onClick={() => dispatch({ type: "addTodo", payload: { todo: todo } })}
                    >add</button>
                </div>

                {
                    todos.map(todo => (<Todo key={todo.id} id={todo.id} todo={todo.name} completed={todo.completed} />))
                }
            </div>
        </>
    )
}

export default Task6
