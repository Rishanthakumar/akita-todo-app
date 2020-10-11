import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TodosModule,
    AuthModule,
    environment.production ? [] : AkitaNgDevtools.forRoot({
      logTrace: true
    }),
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: environment.apiURL }}]
})
export class AppModule { }
