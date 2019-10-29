import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

function AddTodoItem({ handleSubmitTodo }) {
    const [description, setDescription] = useState('');

    const submitClick = () => {
        handleSubmitTodo(description);
        setDescription('');
    }

    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            <input value={description}
                   onChange={event => setDescription(event.target.value)}
                   type="text"
                   placeholder="Insert the todo description here"
                   style={{ width: '70%' }} />
            <button onClick={submitClick} style={{ width: '15%' }}>Add</button>
        </div>
    );
}

// PropTypes
TodoItem.propTypes = {
    handleSubmitTodo: PropTypes.func.isRequired
}

export default AddTodoItem;
