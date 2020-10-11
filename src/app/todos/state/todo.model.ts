import { guid } from '@datorama/akita';

export interface Todo {
  id?: number | string;
  title?: string;
  completed?: boolean;
}

export function createTodo(params: Partial<Todo>): Todo {
  return {
    id: guid(),
    ...params
  } as Todo;
}
