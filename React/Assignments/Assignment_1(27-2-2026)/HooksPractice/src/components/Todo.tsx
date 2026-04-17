import React from 'react'

const Todo = ({ id, todo, completed }) => {
    return (
        <div>
            <p>id: {id}</p>
            <p>Todo: {todo}</p>
            <p>Completed : {completed === false ? "No" : "Yes"}</p>
        </div>
    )
}

export default Todo
