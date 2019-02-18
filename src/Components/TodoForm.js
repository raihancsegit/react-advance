import React from 'react';
import * as t from "prop-types"

const TodoForm = (props) => {
    return (
        <form onSubmit={props.addTask}>
            <input type="text"
                value={props.currentTask}
                onChange={props.updateTask}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

TodoForm.propTypes = {
    currentTask:t.string,
    updateTask:t.func,
    addTask:t.func,
}

export default TodoForm;