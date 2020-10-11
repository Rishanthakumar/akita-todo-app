import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
  exports: [TodosComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TodosModule { }
