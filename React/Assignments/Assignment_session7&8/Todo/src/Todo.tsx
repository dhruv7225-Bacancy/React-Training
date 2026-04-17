import React, { useState } from 'react'
import type { TodoType, Action } from './App'

import "./App.css"
const Todo = React.memo(({ todo, dispatch }: { todo: TodoType, dispatch: React.ActionDispatch<[action: Action]> }) => {
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>(todo.data);
    return (
        <>
            <div>
                <p
                    className={(todo.status === "completed" ? "line-through" : "") + (isUpdate ? " display-none" : " display-block")}
                >{todo.data}</p>
                <input
                    className={isUpdate ? "" : "display-none"}
                    type="text"
                    value={msg}
                    onChange={(e) => { setMsg(e.target.value) }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            if (isUpdate) {
                                dispatch({ type: "update", payload: { id: todo.id, data: msg } })
                            }
                            setIsUpdate(prev => !prev)
                        }
                        else if(e.key==="Escape"){
                            
                            setIsUpdate(prev => !prev)
                        }
                    }}
                />

                <button
                    disabled={todo.status === "completed"}
                    onClick={() => {
                        if (isUpdate) {
                            dispatch({ type: "update", payload: { id: todo.id, data: msg } })
                        }
                        setIsUpdate(prev => !prev)
                    }}
                    
                >update</button>
                <button
                    disabled={isUpdate}
                    onClick={() => dispatch({ type: "toggleCompleted", payload: { id: todo.id } })}
                >✅</button>
                <button onClick={() => dispatch({ type: "remove", payload: { id: todo.id } })}>❌</button>
            </div>
        </>
    )
}
)
export default Todo
