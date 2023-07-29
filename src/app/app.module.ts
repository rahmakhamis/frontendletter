
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import {MatPaginatorModule} from '@angular/material/paginator';

    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
   ;
    import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { HttpClientModule} from '@angular/common/http'


    import {MatToolbarModule} from '@angular/material/toolbar';
    import {MatIconModule} from '@angular/material/icon';
    import { MatButtonModule } from '@angular/material/button';

    import { MatDialogModule } from '@angular/material/dialog';
    import {  MatFormFieldModule } from '@angular/material/form-field';
    import { MatInputModule } from '@angular/material/input';
    import {MatDatepickerModule} from '@angular/material/datepicker';
    import { MatNativeDateModule } from '@angular/material/core';
    import { MatRadioModule } from '@angular/material/radio';
    import {MatTableModule} from '@angular/material/table';
    import {MatMenuModule} from '@angular/material/menu';
    import { LoginComponent } from './login/login.component';

    import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NavigationComponent } from './AdminPages/navigation/navigation.component';
import { HomeComponent } from './AdminPages/home/home.component';
import { LogoutComponent } from './AdminPages/logout/logout.component';
import { SettingComponent } from './AdminPages/setting/setting.component';
import { ReportComponent } from './AdminPages/report/report.component';
import { ListComponent } from './UserPages/list/list.component';
import { UserHomeComponent } from './UserPages/user-home/user-home.component';
import { UserNavigationComponent } from './UserPages/user-navigation/user-navigation.component';
import { UserReportComponent } from './UserPages/user-report/user-report.component';
import { UserSettingComponent } from './UserPages/user-setting/user-setting.component';
import { UserLetterComponent } from './UserPages/user-letter/user-letter.component';
import { UsersComponent } from './AdminPages/users/users.component';
import { ReceiverNavComponent } from './ReceiverPages/receiver-nav/receiver-nav.component';
import { FaqComponent } from './AdminPages/faq/faq.component';
import { UserTraceComponent } from './UserPages/user-trace/user-trace.component';
import { ViewUserComponent } from './AdminPages/users/user/view-user/view-user.component';
import { AddUserComponent } from './AdminPages/users/user/add-user/add-user.component';
import { EditUserComponent } from './AdminPages/users/user/edit-user/edit-user.component';
import { ReceiverRegistryComponent } from './ReceiverPages/receiver-registry/receiver-registry.component';
import { ReceiverHODComponent } from './ReceiverPages/receiver-hod/receiver-hod.component';
import { ReceiverDeanComponent } from './ReceiverPages/receiver-dean/receiver-dean.component';
import { ReceiverDVCComponent } from './ReceiverPages/receiver-dvc/receiver-dvc.component';
import { ReceiverVCComponent } from './ReceiverPages/receiver-vc/receiver-vc.component';
import { ReceiverReportComponent } from './ReceiverPages/receiver-report/receiver-report.component';




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
    ViewUserComponent,
    AddUserComponent,
    EditUserComponent,
    ReceiverRegistryComponent,
    ReceiverHODComponent,
    ReceiverDeanComponent,
    ReceiverDVCComponent,
    ReceiverVCComponent,
    ReceiverReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatToolbarModule ,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatMenuModule,
    CommonModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    AppRoutingModule,




  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
