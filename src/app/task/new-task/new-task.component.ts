import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  constructor(private taskService: TaskService) {}
  @Input({ required: true }) userId!: string;
  @Output() onCloseClick = new EventEmitter<boolean>();


  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  handleOnClose(){
    this.onCloseClick.emit(false);
  }

  handleOnSubmit(){
    if(this.enteredTitle === '' || this.enteredSummary === '' || this.enteredDueDate === ''){
      return;
    }

    const newTask: NewTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    };
    this.taskService.addTask(newTask, this.userId);
    this.onCloseClick.emit(false);
  }
}
