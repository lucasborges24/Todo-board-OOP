export class Board {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.tasks = [];
  }

  onAddTask(id, name, completed) {
    const task = new Task(id, name, completed);
    this.tasks.push(task);
    return task;
  }
}

export class Task {
  constructor(id, name, completed) {
    this.id = id;
    this.name = name;
    this.completed = completed;
  }
}
