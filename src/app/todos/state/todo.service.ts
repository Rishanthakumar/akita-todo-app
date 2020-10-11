import { Injectable } from '@angular/core';
import { TodoStore, TodoState } from './todo.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
export class TodoService extends NgEntityService<TodoState> {

  constructor(protected store: TodoStore) {
    super(store);
  }

  reset(): void {
    this.store.reset();
  }

}
