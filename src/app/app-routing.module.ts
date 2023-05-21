import { LogoutComponent } from './AdminPages/logout/logout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './AdminPages/navigation/navigation.component';
import { HomeComponent } from './AdminPages/home/home.component';
import { LetterComponent } from './AdminPages/letter/letter.component';
import { SentComponent } from './AdminPages/sent/sent.component';
import { TraceComponent } from './AdminPages/trace/trace.component';
import { TrashComponent } from './AdminPages/trash/trash.component';
import { SettingComponent } from './AdminPages/setting/setting.component';
import { UsersComponent } from './AdminPages/users/users.component';
import { DraftComponent } from './AdminPages/draft/draft.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'forgot',
    component: ForgotComponent,
  },
  {
    path:'account',
    component: AccountComponent,
  },



  {
    path: '',
    component: NavigationComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'letter',
        component: LetterComponent,
      },
      {
        path: 'sent',
        component: SentComponent,
      },
      {
        path: 'draft',
        component: DraftComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'setting',
        component: SettingComponent,
      },
      {
        path: 'trash',
        component: TrashComponent,
      },
      {
        path: 'trace',
        component: TraceComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },

    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
