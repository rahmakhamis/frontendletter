import { LogoutComponent } from './AdminPages/logout/logout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './AdminPages/navigation/navigation.component';
import { HomeComponent } from './AdminPages/home/home.component';
import { SettingComponent } from './AdminPages/setting/setting.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AccountComponent } from './account/account.component';
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
import { FaqComponent } from './AdminPages/faq/faq.component';
import { UserTraceComponent } from './UserPages/user-trace/user-trace.component';
import { UserLetterComponent } from './UserPages/user-letter/user-letter.component';
import { ArchivesComponent } from './UserPages/archives/archives.component';
import { EditUserComponent } from './AdminPages/users/user/edit-user/edit-user.component';
import { AddUserComponent } from './AdminPages/users/user/add-user/add-user.component';

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
    // adminRouting
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'adminHome',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'setting',
        component: SettingComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'report',
        component: ReportComponent,
      },
      {
        path:'edit-user',
        component:EditUserComponent,
      },
      {
        path:'add-user',
        component:AddUserComponent,
      }
    ],
  },
  // senderRouting
  {
    path: '',
    component: UserNavigationComponent,
    children: [
      {
        path: 'senderHome',
        component: UserHomeComponent,
      },
      {
        path: 'senderList',
        component: ListComponent,
      },
      {
        path: 'senderLetter',
        component: UserLetterComponent,
      },
      {
        path: 'user-setting',
        component: UserSettingComponent,
      },
      {
        path: 'user-trace',
        component: UserTraceComponent,
      },
      {
        path: 'user-report',
        component: UserReportComponent,
      },
      {
        path:'archives',
        component: ArchivesComponent,
      }
    ],
  },
      // receiverRouting
  {
    path: '',
    component: ReceiverNavComponent,
    children: [
      {
        path: 'receiverHome',
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
