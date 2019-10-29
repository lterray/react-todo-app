import React, {useState, useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodoItem from "./components/AddTodoItem";
import About from "./components/pages/About";

import './App.css';

function App() {
    const [todos, setTodos] = useState(
        [
            /*{
              id: 1,
              title: 'Take out the trash',
              completed: false
            },
            {
              id: 2,
              title: 'Dinner with wife',
              completed: false
            },
            {
              id: 3,
              title: 'Meeting with boss',
              completed: true
            }*/
        ]
    );

    useEffect(
        () => {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(res => setTodos(res.data));
        }
    , []);

    const handleTickTodoCheckbox = (event, todoId) => {
        setTodos(todos.map(todo => {
            if (todo.id === todoId) {
                todo.completed = event.target.checked;
            }
            return todo;
        }));
    }

    const handleDeleteTodo = (todoId) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(resp => setTodos(todos.filter(todo => todo.id !== todoId)));
    }

    const handleSubmitTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos',
            {title, completed: false})
            .then(resp => setTodos([resp.data, ...todos]));
    }

    return (
        <Router>
            <div className="App">
                <Header/>
                <Route exact path="/" render={props => (
                    <React.Fragment>
                        <AddTodoItem handleSubmitTodo={handleSubmitTodo}/>
                        <Todos todos={todos} handleTickTodoCheckbox={handleTickTodoCheckbox}
                               handleDeleteTodo={handleDeleteTodo}/>
                    </React.Fragment>
                )}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>
    );
}

export default App;
