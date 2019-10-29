import React from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

function Todos({todos, handleTickTodoCheckbox, handleDeleteTodo }) {
    return (
        <div>
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo}
                              handleTickTodoCheckbox={handleTickTodoCheckbox}
                              handleDeleteTodo={handleDeleteTodo}/>
                ))
            }
        </div>
    );
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    handleTickTodoCheckbox: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired
}

export default Todos;
