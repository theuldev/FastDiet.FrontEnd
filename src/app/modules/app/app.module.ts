import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatExpansionModule } from '@angular/material/expansion';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MatDialogModule } from '@angular/material/dialog';
import timeGridPlugin from '@fullcalendar/timegrid';

import { MatDatepickerModule } from '@matheo/datepicker';
import { MatNativeDateModule } from '@matheo/datepicker/core';

import { DateAdapter, DateUnit } from '@matheo/datepicker/core';
const MatDatePicker = [
  MatDatepickerModule, MatNativeDateModule, DateAdapter
]
import { MatRadioModule } from '@angular/material/radio';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { RegisterClientComponent } from 'src/app/pages/register-client/register-client.component';
import { EditClientComponent } from 'src/app/pages/edit-client/edit-client.component';
import { ScheduleComponent } from 'src/app/pages/schedule/schedule.component';
import { ScheduleConsultComponent } from 'src/app/pages/schedule-consult/schedule-consult.component';
import { RegisterScheduleNutritionistComponent } from 'src/app/pages/register-schedule-nutritionist/register-schedule-nutritionist.component';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { RegisterNutritionistComponent } from 'src/app/pages/register-nutritionist/register-nutritionist.component';
import { SearchClientComponent } from 'src/app/pages/search-client/search-client.component';
import { UsersModule } from '../users/users.module';
import { CommonModule } from '@angular/common';




FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin, timeGridPlugin]);
@NgModule({
  declarations: [
  ],
  imports: [
    UsersModule,
    
   
    
  


  ],
  exports: [],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
