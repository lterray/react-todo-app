import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, handleTickTodoCheckbox, handleDeleteTodo }) {
    const getStyle = () => {
        return {
            textDecoration: todo.completed ? 'line-through' : 'none',
            backgroundColor: 'pink',
            borderBottom: '1px dotted black',
            padding: '10px'
        }
    }

    const markComplete = (event) => {
        todo.completed = event.target.checked;
        console.log(event.target.checked);
    }

    return (
        <div style={ getStyle() }>
            <p>
                <input type="checkbox" onChange={(event) => handleTickTodoCheckbox(event, todo.id)}/>
                { todo.title }
                <button onClick={(event) => handleDeleteTodo(todo.id)}>Delete</button>
            </p>
        </div>
    );
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    handleTickTodoCheckbox: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired
}

export default TodoItem;
