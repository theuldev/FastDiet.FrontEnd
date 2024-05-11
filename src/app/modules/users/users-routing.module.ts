import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { EditClientComponent } from "src/app/pages/edit-client/edit-client.component";
import { LoginComponent } from "src/app/pages/login/login.component";
import { RegisterClientComponent } from "src/app/pages/register-client/register-client.component";
import { RegisterNutritionistComponent } from "src/app/pages/register-nutritionist/register-nutritionist.component";
import { RegisterScheduleNutritionistComponent } from "src/app/pages/register-schedule-nutritionist/register-schedule-nutritionist.component";
import { ScheduleConsultComponent } from "src/app/pages/schedule-consult/schedule-consult.component";
import { ScheduleComponent } from "src/app/pages/schedule/schedule.component";
import { SearchClientComponent } from "src/app/pages/search-client/search-client.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent },
    {path:'',component: DashboardComponent},
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
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class UsersRoutingModule {}
  