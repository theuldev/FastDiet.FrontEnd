import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/users/components/login/login.component';
import { DashboardComponent } from './modules/users/components/dashboard/dashboard.component';
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
import { RegisterClientComponent } from './modules/users/components/register-client/register-client.component';

import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EditClientComponent } from './modules/users/components/edit-client/edit-client.component';
import { SearchClientComponent } from './modules/users/components/search-client/search-client.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { RegisterNutritionistComponent } from './modules/users/components/register-nutritionist/register-nutritionist.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {MatDialogModule} from '@angular/material/dialog';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ConfirmDialogComponent } from './modules/users/components/confirm-dialog/confirm-dialog.component';
import { RegisterScheduleNutritionistComponent } from './modules/users/components/register-schedule-nutritionist/register-schedule-nutritionist.component';

import { MatDatepickerModule } from '@matheo/datepicker';
import { MatNativeDateModule } from '@matheo/datepicker/core';

import { DateAdapter, DateUnit } from '@matheo/datepicker/core';
const MatDatePicker = [
MatDatepickerModule,MatNativeDateModule, DateAdapter
]
import {ScheduleConsultComponent} from './modules/users/components/schedule-consult/schedule-consult.component';
import{ ScheduleComponent} from  './modules/users/components/schedule/schedule.component';
import {MatRadioModule} from '@angular/material/radio';

const AngularMaterial = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatDialogModule,
  MatRadioModule
];

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin,timeGridPlugin]);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterClientComponent,
    EditClientComponent,
    SearchClientComponent,
    RegisterNutritionistComponent,
    ConfirmDialogComponent,
    RegisterScheduleNutritionistComponent,
    ScheduleConsultComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterial,
    FullCalendarModule,
    FormsModule
    
  ],
  exports: [AngularMaterial,],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
