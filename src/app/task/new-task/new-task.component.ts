import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() onCloseClick = new EventEmitter<boolean>();
  @Output() onSubmit = new EventEmitter<NewTask>();

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
    this.onSubmit.emit(newTask);
  }
}
