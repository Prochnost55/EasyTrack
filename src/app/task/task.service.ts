import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import { type NewTask } from "./task.model";

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  addTask(task: NewTask, userId: string) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}