export class Todo {
  constructor({ priority, text, status, id }) {
    this.priority = priority;
    this.text = text;
    this.status = status;
    this.id = id;
  }

  getStatus() {
    return this.status;
  }

  isCompleted() {
    return this.status === "completed";
  }

  isDeleted() {
    return this.status === "deleted";
  }
}
