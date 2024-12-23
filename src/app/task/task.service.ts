import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import { type NewTask } from "./task.model";

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = DUMMY_TASKS;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  addTask(task: NewTask, userId: string) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
  }
}