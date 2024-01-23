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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
