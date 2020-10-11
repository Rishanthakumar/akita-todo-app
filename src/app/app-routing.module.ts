import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TodosComponent } from './todos/todos.component';
import { TodosModule } from './todos/todos.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TodosModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
