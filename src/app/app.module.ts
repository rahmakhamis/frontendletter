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
import { UsersComponent } from './AdminPages/users/users.component';
import { TrashComponent } from './AdminPages/trash/trash.component';
import { LogoutComponent } from './AdminPages/logout/logout.component';
import { TraceComponent } from './AdminPages/trace/trace.component';
import { SettingComponent } from './AdminPages/setting/setting.component';
import { LetterComponent } from './AdminPages/letter/letter.component';
import { DraftComponent } from './AdminPages/draft/draft.component';
import { SentComponent } from './AdminPages/sent/sent.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    ForgotComponent,
    NavigationComponent,
    HomeComponent,
    UsersComponent,
    TrashComponent,
    LogoutComponent,
    TraceComponent,
    SettingComponent,
    LetterComponent,
    DraftComponent,
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
