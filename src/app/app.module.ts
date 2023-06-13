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

import { LetterComponent } from './AdminPages/letter/letter.component';
import { DraftComponent } from './AdminPages/draft/draft.component';
import { SentComponent } from './AdminPages/sent/sent.component';

import { ArchivesComponent } from './AdminPages/archives/archives.component';
import { ReportComponent } from './AdminPages/report/report.component';
import { SettingComponent } from './AdminPages/setting/setting.component';


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

    LetterComponent,
    DraftComponent,
    SentComponent,


    SettingComponent,
    ArchivesComponent,
    ReportComponent,
    SentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,



    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
