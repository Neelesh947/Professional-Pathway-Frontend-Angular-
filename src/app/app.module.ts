import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './home/user/login/login.component';
import { RegisterComponent } from './home/user/register/register.component';
import { RregisterComponent } from './home/recruiter/rregister/rregister.component';
import { RloginComponent } from './home/recruiter/rlogin/rlogin.component';
import {MatCardModule} from '@angular/material/card';
import { DatePipe } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { authInterceptorProvider } from './Services/auth.interceptor';
import { UserDashboardComponent } from './home/user/user-dashboard/user-dashboard.component';
import { SidebarUserComponent } from './home/user/sidebar-user/sidebar-user.component';
import { UprofileComponent } from './home/user/uprofile/uprofile.component';
import { JobsearchlistComponent } from './home/user/jobsearchlist/jobsearchlist.component';
import { ApplyjobComponent } from './home/user/applyjob/applyjob.component';
import { RecruiterDashboardComponent } from './home/recruiter/recruiter-dashboard/recruiter-dashboard.component';
import { SidebarRecruiterComponent } from './home/recruiter/sidebar-recruiter/sidebar-recruiter.component';
import { RprofileComponent } from './home/recruiter/rprofile/rprofile.component';
import { JobpostComponent } from './home/recruiter/jobpost/jobpost.component';
import { JobsearchComponent } from './home/recruiter/jobsearch/jobsearch.component';
import { AppliedcandidatesComponent } from './home/recruiter/appliedcandidates/appliedcandidates.component';
import { MatNativeDateModule } from '@angular/material/core';
import { YourJobPostsComponent } from './home/recruiter/your-job-posts/your-job-posts.component';
import { UpdateJobsComponent } from './home/recruiter/update-jobs/update-jobs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    RregisterComponent,
    RloginComponent,
    FooterComponent,
    UserDashboardComponent,
    SidebarUserComponent,
    UprofileComponent,
    JobsearchlistComponent,
    ApplyjobComponent,
    RecruiterDashboardComponent,
    SidebarRecruiterComponent,
    RprofileComponent,
    JobpostComponent,
    JobsearchComponent,
    AppliedcandidatesComponent,
    YourJobPostsComponent,
    UpdateJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,MatToolbarModule,
    MatMenuModule,MatCardModule,
    MatFormFieldModule,    
    MatInputModule,   
    FormsModule ,
    HttpClientModule,MatSnackBarModule,
    MatListModule,MatDatepickerModule,ReactiveFormsModule,
    MatNativeDateModule,MatSelectModule,DatePipe
  ],
  exports:[
    MatInputModule
  ],
  providers: [
     authInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
