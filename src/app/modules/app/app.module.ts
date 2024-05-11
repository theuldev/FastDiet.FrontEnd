import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { UsersModule } from '../users/users.module';



@NgModule({
  declarations: [
  ],
  imports: [
    UsersModule

  ],
  exports: [],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
