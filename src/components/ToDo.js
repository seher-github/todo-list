import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='ToDo'>
        {/*<p onClick={()=> toggleComplete(task.id)} className={`todo ${task.completed} ? 'completed':""`}>{task.task}</p>*/}
       <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => toggleComplete(task.id)} >{task.task}</p>
        <div>
            <FontAwesomeIcon icon = {faPenToSquare} onClick={()=> editTodo(task.id)}/>
            <FontAwesomeIcon icon = {faTrash} onClick={()=> deleteTodo(task.id)}/>

        </div>

      
    </div>
  )
}

export default ToDo
