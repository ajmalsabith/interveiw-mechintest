import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';

const routes: Routes = [

  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'admin/dash',component:AdmindashboardComponent},
  {path:'admin/login',component:AdmindashboardComponent},
  {path:'admin/register',component:AdmindashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
