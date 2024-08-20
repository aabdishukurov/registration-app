import React, { useEffect, useState } from 'react';
import '../Todos/Todos.css';

const TodoCards = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setTodos(data));
    }, []);

    return (
        <div className="todo-cards">
            {todos.map(todo => (
                <div key={todo.id} className="todo-card">
                    <h3>{todo.title}</h3>
                    <p>ID: {todo.id}</p>
                    <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
                </div>
            ))}
        </div>
    );
};

export default TodoCards;