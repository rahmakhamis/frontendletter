
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

import { UserHomeComponent } from './UserPages/user-home/user-home.component';
import { UserNavigationComponent } from './UserPages/user-navigation/user-navigation.component';


import { UserLetterComponent } from './UserPages/user-letter/user-letter.component';
import { UsersComponent } from './AdminPages/users/users.component';
import { ReceiverNavComponent } from './ReceiverPages/receiver-nav/receiver-nav.component';


import { ViewUserComponent } from './AdminPages/users/user/view-user/view-user.component';
import { AddUserComponent } from './AdminPages/users/user/add-user/add-user.component';
import { EditUserComponent } from './AdminPages/users/user/edit-user/edit-user.component';





import { ReceiverLetterComponent } from './ReceiverPages/receiver-letter/receiver-letter.component';
import { AddletterComponent } from './ReceiverPages/receiver-letter/addletter/addletter.component';
import { RejectedLettersComponent } from './ReceiverPages/rejected-letters/rejected-letters.component';
import { AprovedLettersComponent } from './ReceiverPages/aproved-letters/aproved-letters.component';
import { HomeRegistryComponent } from './UserPages/home-registry/home-registry.component';
import { HodHomeComponent } from './UserPages/hod-home/hod-home.component';

import { HodLettersComponent } from './UserPages/hod-letters/hod-letters.component';
import { DVCHOMEComponent } from './UserPages/dvc-home/dvc-home.component';
import { DVCLETTERSComponent } from './UserPages/dvc-letters/dvc-letters.component';



import { DeanMylettersComponent } from './UserPages/dean-myletters/dean-myletters.component';
import { DeanHomeComponent } from './UserPages/dean-home/dean-home.component';
import { DeanLettersComponent } from './UserPages/dean-letters/dean-letters.component';
import { VcHomeComponent } from './UserPages/vc-home/vc-home.component';
import { VcMylettersComponent } from './UserPages/vc-myletters/vc-myletters.component';
import { VcLettersComponent } from './UserPages/vc-letters/vc-letters.component';
import { HodMylettersComponent } from './UserPages/hod-myletters/hod-myletters.component';
import { DvcMylettersComponent } from './UserPages/dvc-myletters/dvc-myletters.component';
import { ApprovedComponent } from './UserPages/approved/approved.component';
import { RejectedComponent } from './UserPages/rejected/rejected.component';
import {MatSelectModule} from '@angular/material/select';
import { ViewDocumentComponent } from './view-document/view-document.component';






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

    UserHomeComponent,
    UserNavigationComponent,
    

    UserLetterComponent,
    UsersComponent,
    ReceiverNavComponent,


    ViewUserComponent,
    AddUserComponent,
    EditUserComponent,






    ReceiverLetterComponent,
    AddletterComponent,
    RejectedLettersComponent,
    AprovedLettersComponent,
    HomeRegistryComponent,
    HodHomeComponent,
    HodLettersComponent,


    DVCHOMEComponent,
    DVCLETTERSComponent,


     DeanHomeComponent,
     DeanMylettersComponent,
     DeanLettersComponent,
     VcHomeComponent,
     VcMylettersComponent,
     VcLettersComponent,
     HodMylettersComponent,
     DvcMylettersComponent,
     ApprovedComponent,
     RejectedComponent,
     ViewDocumentComponent,


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
    MatSelectModule




  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
