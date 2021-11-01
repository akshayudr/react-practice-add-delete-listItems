import React from 'react';
import TaskStore from './TaskStore';
import { observer } from 'mobx-react-lite';

const List = () => {
  const { tasks, deleteHandle } = TaskStore;
  return (
    <div>
      <h1>List Items</h1>
      {tasks.map((x) => {
        return (
          <div>
            <p>Product:{x.product}</p>
            <p>Category: {x.category}</p>
            <button onClick={() => deleteHandle(x)}>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default observer(List);
