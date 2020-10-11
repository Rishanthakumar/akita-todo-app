import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private authStore: AuthStore){
  }

  updateUsername(username: string): void {
    this.authStore.update({
      username
    });
  }

  reset(): void {
    this.authStore.reset();
  }
}
