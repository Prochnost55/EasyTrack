import { NgModule } from "@angular/core";
import { TaskComponent } from "./task.component";
import { TaskItemComponent } from "./task-item/task-item.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TaskComponent, TaskItemComponent, NewTaskComponent],
    exports: [TaskComponent],
    imports: [SharedModule, CommonModule, FormsModule]
})
export class TasksModule {
}