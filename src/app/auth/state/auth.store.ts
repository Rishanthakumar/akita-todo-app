import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface AuthState {
   username: string;
}

export function createInitialState(): AuthState {
  return {
    username: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth', resettable: true })
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createInitialState());
  }

}

