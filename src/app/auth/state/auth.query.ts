import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { AuthStore, AuthState } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {

  constructor(protected store: AuthStore) {
    super(store);
  }

  selectUsername(): Observable<string> {
    return this.select(state => state.username);
  }

  getUsername(): string {
    return this.getValue().username;
  }

}
