import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewUserComponent } from './pages/user/view-user/view-user.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },{
    path:"account-page",
    component:AccountPageComponent,
   },{
    path:"forgot",
    component:ForgotComponent,
   },
   {

    path:"home",
    component: NavigationComponent,
    children:[
      {
        path:"dashboard",
        component:DashboardComponent,
       },{
        path:"user",
        component:ViewUserComponent,
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
