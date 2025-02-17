import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim()) {
            addTodo(value);
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
                placeholder="What is the task today?" 
                onChange={(e) => setValue(e.target.value)} // update state here
            />
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    );
};

export default TodoForm;
