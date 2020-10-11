import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthQuery } from '../auth/state/auth.query';
import { AuthService } from '../auth/state/auth.service';
import { Todo } from './state/todo.model';
import { TodoQuery } from './state/todo.query';
import { TodoService } from './state/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  todos$: Observable<Todo[]>;
  username$: Observable<string>;

  formControl: FormControl;

  constructor(
    private router: Router, private authQuery: AuthQuery,
    private authService: AuthService, private todoQuery: TodoQuery, private todoService: TodoService) { }

  ngOnInit(): void {
    this.formControl = new FormControl();

    this.getAll();

    this.todos$ = this.todoQuery.selectAll();
    this.username$ = this.authQuery.selectUsername();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getAll(): void {
    this.todoService.get().subscribe();
  }

  add(): void {
    const title = this.formControl.value;
    if (title?.trim()) {

      this.todoService.add({title}).subscribe(() => {
        this.reset();
      });

    }
  }

  public reset(): void {
    this.formControl.reset();
  }

  onComplete(todo: Todo): void {
    this.todoService.update(todo.id, todo).subscribe();
  }

  onDelete(id: string): void {
    this.todoService.delete(id).subscribe();
  }

  logout(): void {
    this.authService.reset();
    this.router.navigate(['login']);
  }
}
