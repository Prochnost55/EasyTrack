import { Component, Input } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { DUMMY_TASKS } from '../dummy-tasks';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  tasks = DUMMY_TASKS;
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onTaskComplete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)

  }
}
