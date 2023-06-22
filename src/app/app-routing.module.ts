
import { LogoutComponent } from './AdminPages/logout/logout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './AdminPages/navigation/navigation.component';
import { HomeComponent } from './AdminPages/home/home.component';
import { SentComponent } from './AdminPages/sent/sent.component';
import { TraceComponent } from './AdminPages/trace/trace.component';
import { SettingComponent } from './AdminPages/setting/setting.component';
import { DraftComponent } from './AdminPages/draft/draft.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AccountComponent } from './account/account.component';
import { ArchivesComponent } from './AdminPages/archives/archives.component';
import { ReportComponent } from './AdminPages/report/report.component';
import { ListComponent } from './UserPages/list/list.component';
import { UserHomeComponent } from './UserPages/user-home/user-home.component';
import { UserSettingComponent } from './UserPages/user-setting/user-setting.component';
import { UserReportComponent } from './UserPages/user-report/user-report.component';
import { UserNavigationComponent } from './UserPages/user-navigation/user-navigation.component';
import { UsersComponent } from './AdminPages/users/users.component';
import { ReceiverNavComponent } from './ReceiverPages/receiver-nav/receiver-nav.component';
import { ReceiverHomeComponent } from './ReceiverPages/receiver-home/receiver-home.component';
import { ReceiverSettingComponent } from './ReceiverPages/receiver-setting/receiver-setting.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'forgot',
    component: ForgotComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },

  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
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
        path: 'archives',
        component: ArchivesComponent,
      },

      {
        path: 'trace',
        component: TraceComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'report',
        component: ReportComponent,
      },
    ],
  },
  {
    path: '',
    component: UserNavigationComponent,
    children: [
      {
        path: 'home',
        component: UserHomeComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },

      {
        path: 'user-setting',
        component: UserSettingComponent,
      },
      {
        path: 'user-report',
        component: UserReportComponent,
      },
    ],
  },

  {
    path: '',
    component: ReceiverNavComponent,
    children: [
      {
        path: 'home-receiver',
        component: ReceiverHomeComponent,
      },
      {
        path: 'setting',
        component: ReceiverSettingComponent,
      },

      {
        path: 'user-setting',
        component: UserSettingComponent,
      },
      {
        path: 'user-report',
        component: UserReportComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
