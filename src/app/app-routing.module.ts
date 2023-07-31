import { DvcMylettersComponent } from './UserPages/dvc-myletters/dvc-myletters.component';
import { HodMylettersComponent } from './UserPages/hod-myletters/hod-myletters.component';
import { DeanLettersComponent } from './UserPages/dean-letters/dean-letters.component';
import { VcLettersComponent } from './UserPages/vc-letters/vc-letters.component';
import { HodHomeComponent } from './UserPages/hod-home/hod-home.component';
import { ReceiverVCComponent } from './ReceiverPages/receiver-vc/receiver-vc.component';
import { ReceiverDeanComponent } from './ReceiverPages/receiver-dean/receiver-dean.component';
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

import { UserHomeComponent } from './UserPages/user-home/user-home.component';
import { UserSettingComponent } from './UserPages/user-setting/user-setting.component';
import { UserReportComponent } from './UserPages/user-report/user-report.component';
import { UserNavigationComponent } from './UserPages/user-navigation/user-navigation.component';
import { UsersComponent } from './AdminPages/users/users.component';
import { ReceiverNavComponent } from './ReceiverPages/receiver-nav/receiver-nav.component';
import { ReceiverHomeComponent } from './ReceiverPages/receiver-home/receiver-home.component';
import { ReceiverSettingComponent } from './ReceiverPages/receiver-setting/receiver-setting.component';

import { UserTraceComponent } from './UserPages/user-trace/user-trace.component';
import { UserLetterComponent } from './UserPages/user-letter/user-letter.component';

import { EditUserComponent } from './AdminPages/users/user/edit-user/edit-user.component';
import { AddUserComponent } from './AdminPages/users/user/add-user/add-user.component';
import { ArchivesComponent } from './AdminPages/archives/archives.component';
import { ReceiverRegistryComponent } from './ReceiverPages/receiver-registry/receiver-registry.component';
import { ReceiverHODComponent } from './ReceiverPages/receiver-hod/receiver-hod.component';
import { ReceiverDVCComponent } from './ReceiverPages/receiver-dvc/receiver-dvc.component';
import { ReceiverReportComponent } from './ReceiverPages/receiver-report/receiver-report.component';
import { ReceiverLetterComponent } from './ReceiverPages/receiver-letter/receiver-letter.component';
import { RejectedLettersComponent } from './ReceiverPages/rejected-letters/rejected-letters.component';
import { AprovedLettersComponent } from './ReceiverPages/aproved-letters/aproved-letters.component';
import { HomeRegistryComponent } from './UserPages/home-registry/home-registry.component';

import { DeanHomeComponent } from './UserPages/dean-home/dean-home.component';
import { DeanMylettersComponent } from './UserPages/dean-myletters/dean-myletters.component';
import { DVCHOMEComponent } from './UserPages/dvc-home/dvc-home.component';
import { DVCLETTERSComponent } from './UserPages/dvc-letters/dvc-letters.component';

import { VcHomeComponent } from './UserPages/vc-home/vc-home.component';
import { VcMylettersComponent } from './UserPages/vc-myletters/vc-myletters.component';
import { HodLettersComponent } from './UserPages/hod-letters/hod-letters.component';

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
        component: HomeRegistryComponent,
      },

      {
        path: 'senderLetter',
        component: UserLetterComponent,
      },
      {
        path: 'user-setting',
        component: UserSettingComponent,
      },
      // hod
      {
        path: 'hod-home',
        component: HodHomeComponent,
      },
      {
        path: 'hod-myletters',
        component: HodMylettersComponent
      },
     {
      path: 'hod-letters',
      component:HodLettersComponent
    },
    // dean
    {
      path: 'dean-home',
      component: DeanHomeComponent
    },
    {
      path: 'dean-myletters',
      component: DeanMylettersComponent
    },
    {
      path: 'dean-letters',
      component: DeanLettersComponent
    },
    // dvc
    {
      path: 'dvc-home',
      component: DVCHOMEComponent
    },
    {
      path: 'dvc-myletters',
      component: DvcMylettersComponent
    },
    {
      path: 'dvc-letters',
      component: DVCLETTERSComponent
    },
    // vc
    {
      path: 'vc-home',
      component: VcHomeComponent
    },
    {
      path: 'vc-myletters',
      component: VcMylettersComponent
    },
    {
      path: 'vc-letters',
      component: VcLettersComponent
    },



      {
        path: 'user-report',
        component: UserReportComponent,
      },


    ],
  },
      // receiverRouting
  {
    path: '',
    component: ReceiverNavComponent,
    children: [
      {
        path: 'receiverHome',
        component: ReceiverHomeComponent
      },
      {
        path: 'receiver-letter',
        component: ReceiverLetterComponent
      },
      {
        path: 'rejected-letters',
        component: RejectedLettersComponent
      },
      {
        path: 'aproved-letter',
        component: AprovedLettersComponent
      },

      // {
      //   path: 'receiver-DVC',
      //   component: ReceiverDVCComponent
      // },
      // {
      //   path: 'receiver-VC',
      //   component: ReceiverVCComponent
      // },
      // {
      //   path: 'receiver-report',
      //   component: ReceiverReportComponent
      // },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
