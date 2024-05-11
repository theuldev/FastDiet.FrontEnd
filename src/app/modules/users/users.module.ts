import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from '../app/app.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { RegisterClientComponent } from 'src/app/pages/register-client/register-client.component';
import { EditClientComponent } from 'src/app/pages/edit-client/edit-client.component';
import { SearchClientComponent } from 'src/app/pages/search-client/search-client.component';
import { RegisterNutritionistComponent } from 'src/app/pages/register-nutritionist/register-nutritionist.component';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { RegisterScheduleNutritionistComponent } from 'src/app/pages/register-schedule-nutritionist/register-schedule-nutritionist.component';
import { ScheduleConsultComponent } from 'src/app/pages/schedule-consult/schedule-consult.component';
import { ScheduleComponent } from 'src/app/pages/schedule/schedule.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@matheo/datepicker';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app/app-routing.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { WrapperComponent } from 'src/app/components/wrapper/wrapper.component';

const Components = [
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
  ScheduleComponent,
  NavbarComponent,
  WrapperComponent
]
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

@NgModule({
  declarations: [
    Components
  ],
  imports: [
    CommonModule,
    AngularMaterial,
    BrowserAnimationsModule,
    CommonModule,
    FullCalendarModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    AngularMaterial
  ]
})
export class UsersModule { }
