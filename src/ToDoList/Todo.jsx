import React, { useState } from 'react';
import './todo.css';

const Todo = () => {
  const [data, setData] = useState('');
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setData(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const totalTodos = {
      id: Math.random(),
      text: data,
    };
    setData('');
    setTodos([totalTodos, ...todos]);
  };

  const deleteTodo = (id) => {
    const updatedata = todos.filter((item) => item.id != id);
    setTodos(updatedata);
  };

  return (
    <div className="main_container">
      <div className="container">
        <h4>ToDo</h4>
        <form onSubmit={submitHandler}>
          <input type="text" value={data} onChange={changeHandler} />
          <button className="add_btn">Add</button>
        </form>
        {todos.map((item) => (
          <div key={item.id} className="list_item">
            <div>{item.text}</div>
            <button className='delete_btn' onClick={() => deleteTodo(item.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
