import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";
import { ConfirmDialogComponent } from "src/app/components/confirm-dialog/confirm-dialog.component";
import { WrapperComponent } from "src/app/components/wrapper/wrapper.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { EditClientComponent } from "src/app/pages/edit-client/edit-client.component";
import { LoginComponent } from "src/app/pages/login/login.component";
import { RegisterClientComponent } from "src/app/pages/register-client/register-client.component";
import { RegisterNutritionistComponent } from "src/app/pages/register-nutritionist/register-nutritionist.component";
import { RegisterScheduleNutritionistComponent } from "src/app/pages/register-schedule-nutritionist/register-schedule-nutritionist.component";
import { ScheduleConsultComponent } from "src/app/pages/schedule-consult/schedule-consult.component";
import { ScheduleComponent } from "src/app/pages/schedule/schedule.component";
import { SearchClientComponent } from "src/app/pages/search-client/search-client.component";
import { AppRoutingModule } from "../app/app-routing.module";
import { AppComponent } from "../app/app.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatRadioModule} from '@angular/material/radio';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
















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
  MatNativeDateModule,
  MatRippleModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatDialogModule,
  MatRadioModule,
  MatDatepickerModule
];
@NgModule({
  declarations: [
    Components
  ],
  imports: [
    AngularMaterial,
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    AngularMaterial
  ],
  providers: [provideAnimations()]
})
export class UsersModule { }
