import { Component, Input } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskItemComponent, NewTaskComponent],
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
  isAddingTask = false;

  onTaskComplete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
  handleAddTask(){
    this.isAddingTask = true;
  }
  onCloseClick($event: boolean) {
    this.isAddingTask = $event;
  }

  handleTaskSubmit($event: NewTask) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: this.userId,
      title: $event.title,
      summary: $event.summary,
      dueDate: $event.dueDate,
    });
    console.log('asdf')
    this.isAddingTask = false;
  }
}
