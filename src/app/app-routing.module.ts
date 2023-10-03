import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TechnicianComponent } from './components/technician/technician.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { AuthGuardService } from './components/auth/services/auth-guard.service';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { CalendarResolver } from './resolvers/calendar.resolver';


const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: ()=> DashboardComponent,
    canActivate: [AuthGuardService],
    resolve: {
      schedules : CalendarResolver
    }
  },
  {
    path: 'calendar',
    loadComponent: () => CalendarComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'clients',
    loadComponent: () => ClientsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'technician',
    loadComponent: () => TechnicianComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'equipments',
    loadComponent: () => EquipmentsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'sign-in',
    loadComponent: ()=> SignInComponent
  },
  {
    path: 'sign-up',
    loadComponent: ()=> SignUpComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService, CalendarResolver]
})
export class AppRoutingModule { }
