import React, { useState } from 'react';

const EditToDoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim()) {
            editTodo(value, task.id);
            setValue("");
        }
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                className="todo-input"
                value={value}
                placeholder="Update Task"
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    );
};

export default EditToDoForm;
