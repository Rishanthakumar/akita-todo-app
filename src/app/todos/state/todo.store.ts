import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface TodoState extends EntityState<Todo> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todo' })
export class TodoStore extends EntityStore<TodoState> {

  constructor() {
    super();
  }

}

