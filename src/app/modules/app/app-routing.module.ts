import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { EditClientComponent } from 'src/app/pages/edit-client/edit-client.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterClientComponent } from 'src/app/pages/register-client/register-client.component';
import { RegisterNutritionistComponent } from 'src/app/pages/register-nutritionist/register-nutritionist.component';
import { RegisterScheduleNutritionistComponent } from 'src/app/pages/register-schedule-nutritionist/register-schedule-nutritionist.component';
import { ScheduleConsultComponent } from 'src/app/pages/schedule-consult/schedule-consult.component';
import { ScheduleComponent } from 'src/app/pages/schedule/schedule.component';
import { SearchClientComponent } from 'src/app/pages/search-client/search-client.component';


const routes: Routes = [
{path:'', loadChildren: () => import('../users/users-routing.module').then(m => m.UsersRoutingModule)}
  
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
