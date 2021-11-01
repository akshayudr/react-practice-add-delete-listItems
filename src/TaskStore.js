import { makeAutoObservable } from 'mobx';
class TaskStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask = (value) => {
    this.tasks = [value, ...this.tasks];
    console.log(this.tasks);
  };

  deleteHandle = (task) => {
    this.tasks = this.tasks.filter((i) => i.product !== task.product);
  };
}

const store = new TaskStore();
export default store;
