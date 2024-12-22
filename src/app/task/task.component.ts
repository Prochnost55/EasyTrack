import { Component, Input } from '@angular/core';
import { TaskItemComponent } from "./task-item/task-item.component";
import { DUMMY_TASKS } from '../dummy-tasks';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;

  get selectedUserTasks(){
    return DUMMY_TASKS.filter(task => task.userId === this.userId);
  }
}
