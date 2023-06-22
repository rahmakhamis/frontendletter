import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NavigationComponent } from './AdminPages/navigation/navigation.component';
import { HomeComponent } from './AdminPages/home/home.component';


import { LogoutComponent } from './AdminPages/logout/logout.component';
import { TraceComponent } from './AdminPages/trace/trace.component';
import { DraftComponent } from './AdminPages/draft/draft.component';
import { SentComponent } from './AdminPages/sent/sent.component';
import { ArchivesComponent } from './AdminPages/archives/archives.component';
import { ReportComponent } from './AdminPages/report/report.component';
import { SettingComponent } from './AdminPages/setting/setting.component';
import { ListComponent } from './UserPages/list/list.component';
import { UserHomeComponent } from './UserPages/user-home/user-home.component';
import { UserNavigationComponent } from './UserPages/user-navigation/user-navigation.component';
import { UserReportComponent } from './UserPages/user-report/user-report.component';
import { UserSettingComponent } from './UserPages/user-setting/user-setting.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserLetterComponent } from './UserPages/user-letter/user-letter.component';
import { UsersComponent } from './AdminPages/users/users.component';

import { ReceiverNavComponent } from './ReceiverPages/receiver-nav/receiver-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    ForgotComponent,
    NavigationComponent,
    HomeComponent,


    LogoutComponent,
    TraceComponent,

    DraftComponent,
    SentComponent,


    SettingComponent,
    ArchivesComponent,
    ReportComponent,
    SentComponent,
    ListComponent,
    UserHomeComponent,
    UserNavigationComponent,
    UserReportComponent,
    UserSettingComponent,
    UserLetterComponent,
    UsersComponent,

ReceiverNavComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    // NgModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
