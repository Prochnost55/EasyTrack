import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from '../task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input({required: true}) task!: Task;
  constructor(private taskService: TaskService) {}

  onCompleteClick(){
    this.taskService.deleteTask(this.task.id);
  }
}
