import React, { useState } from 'react';
import TaskStore from './TaskStore';

const AddTask = () => {
  const [task, setTask] = useState({ product: '', category: '' });
  const { addTask } = TaskStore;

  const handleChange = (e) => {
    setTask({ ...task, product: e.target.value });
  };

  const handleAdd = () => {
    addTask(task);
  };

  const handleCategory = (e) => {
    setTask({ ...task, category: e.target.value });
  };
  return (
    <div>
      <h1>Add Task</h1>
      Product:<input onChange={handleChange}></input>
      <br />
      Category: <input onChange={handleCategory}></input>
      <br />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default AddTask;
