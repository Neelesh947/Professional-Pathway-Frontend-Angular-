import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './home/user/login/login.component';
import { RegisterComponent } from './home/user/register/register.component';
import { RloginComponent } from './home/recruiter/rlogin/rlogin.component';
import { RregisterComponent } from './home/recruiter/rregister/rregister.component';

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
    pathMatch:"full"
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
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
