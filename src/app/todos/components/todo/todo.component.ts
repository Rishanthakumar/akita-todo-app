import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from '../../state/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {

  constructor() { }

  @Input() todo: Todo;
  @Output() completeTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<string | number>();

  control: FormControl;

  ngOnInit(): void {
    this.control = new FormControl(this.todo.completed);

    this.control.valueChanges.subscribe((completed: boolean) => {
      this.completeTodo.emit({ ...this.todo, completed });
    });
  }

}
