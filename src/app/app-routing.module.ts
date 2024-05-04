import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/users/components/login/login.component';
import { DashboardComponent } from './modules/users/components/dashboard/dashboard.component';
import { RegisterClientComponent } from './modules/users/components/register-client/register-client.component';
import { EditClientComponent } from './modules/users/components/edit-client/edit-client.component';
import { SearchClientComponent } from './modules/users/components/search-client/search-client.component';
import { RegisterNutritionistComponent } from './modules/users/components/register-nutritionist/register-nutritionist.component';
import { RegisterScheduleNutritionistComponent } from './modules/users/components/register-schedule-nutritionist/register-schedule-nutritionist.component';
import { ScheduleConsultComponent } from './modules/users/components/schedule-consult/schedule-consult.component';
import { ScheduleComponent } from './modules/users/components/schedule/schedule.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path:'',component: LoginComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'consultar',component: ScheduleComponent},
  {path:'registrar',component: RegisterClientComponent},
  {path: 'editar',component: EditClientComponent},
  {path: 'pesquisar',component:SearchClientComponent},
  {path: 'meuperfil',component: RegisterNutritionistComponent},
  {path:'registrar-agenda',component:RegisterScheduleNutritionistComponent},
  {path:'consultar-agenda',component: ScheduleConsultComponent}
  
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
