import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './home/user/login/login.component';
import { RegisterComponent } from './home/user/register/register.component';
import { RloginComponent } from './home/recruiter/rlogin/rlogin.component';
import { RregisterComponent } from './home/recruiter/rregister/rregister.component';
import { UserDashboardComponent } from './home/user/user-dashboard/user-dashboard.component';
import { UserGuard } from './Services/user.guard';
import { RecruiterGuard } from './Services/recruiter.guard';
import { UprofileComponent } from './home/user/uprofile/uprofile.component';
import { JobsearchlistComponent } from './home/user/jobsearchlist/jobsearchlist.component';
import { ApplyjobComponent } from './home/user/applyjob/applyjob.component';
import { RecruiterDashboardComponent } from './home/recruiter/recruiter-dashboard/recruiter-dashboard.component';
import { RprofileComponent } from './home/recruiter/rprofile/rprofile.component';
import { JobpostComponent } from './home/recruiter/jobpost/jobpost.component';
import { JobsearchComponent } from './home/recruiter/jobsearch/jobsearch.component';
import { AppliedcandidatesComponent } from './home/recruiter/appliedcandidates/appliedcandidates.component';
import { YourJobPostsComponent } from './home/recruiter/your-job-posts/your-job-posts.component';
import { UpdateJobsComponent } from './home/recruiter/update-jobs/update-jobs.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeComponent,
    pathMatch:"full",
  },
  {
    path:"about",
    component: AboutComponent,
    pathMatch: "full",
  },
  {
    path:"ulogin",
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:"uregister",
    component:RegisterComponent,
    pathMatch:"full"
  },
  {
    path:"rregister",
    component:RregisterComponent,
    pathMatch:'full',
  },
  {
    path:"rlogin",
    component:RloginComponent,
    pathMatch:'full',
  },
  {
    path:"user-dashboard",
    component:UserDashboardComponent, 
    canActivate:[UserGuard],
    children:[
      {
        path:'uprofile',
        component:UprofileComponent,
      },
      {
        path:'joblist',
        component:JobsearchlistComponent,
      },
      {
        path:'jobdescription/:jobId/:title',
        component:ApplyjobComponent,
      }
    ],
  },
  {
    path:'recruiter-dashboard',
    component:RecruiterDashboardComponent,
    canActivate:[RecruiterGuard],
    children:[
      {
        path:"recruiter-profile",
        component:RprofileComponent
      },
      {
        path:"job-post",
        component:JobpostComponent
      },
      {
        path:"job-search",
        component:JobsearchComponent
      },
      {
        path:"applied-candidates",
        component:AppliedcandidatesComponent
      },
      {
        path:"job-post-recruiter",
        component:YourJobPostsComponent
      },
      {
        path:"edit-jobs/:jobId/:recruiterId",
        component:UpdateJobsComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
