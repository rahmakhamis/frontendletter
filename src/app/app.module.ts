import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
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
import { FaqComponent } from './AdminPages/faq/faq.component';
import { UserTraceComponent } from './UserPages/user-trace/user-trace.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    ForgotComponent,
    NavigationComponent,
    HomeComponent,
    LogoutComponent,
    SettingComponent,
    ReportComponent,
    ListComponent,
    UserHomeComponent,
    UserNavigationComponent,
    UserReportComponent,
    UserSettingComponent,
    UserLetterComponent,
    UsersComponent,
    ReceiverNavComponent,
    FaqComponent,
    UserTraceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    //NgModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
