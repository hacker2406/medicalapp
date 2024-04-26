import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewAppointmentComponent } from './pages/new-appointment/new-appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'new',
    component:NewAppointmentComponent
  },
  {
    path:'list',
    component:AppointmentListComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
