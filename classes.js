class Board {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.tasks = [];
  }

  onAddTask(id, name, completed) {
    const task = new Task(id, name, completed);
    return this.tasks.push(task);
  }
}

class Task {
  constructor(id, name, completed) {
    this.id = id;
    this.name = name;
    this.completed = completed;
  }
}

export { Board, Task };
