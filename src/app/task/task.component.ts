import { Component, Input } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task.model';
import { CardComponent } from '../shared/card/card.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  isAddingTask = false;

  handleAddTask() {
    this.isAddingTask = true;
  }
  onCloseClick($event: boolean) {
    this.isAddingTask = $event;
  }
}
