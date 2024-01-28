import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { RecruiterService } from '../../Services/recruiter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isLoggedin=false;
  user=null;

  isRecruiterLoggedIn=false;
  recruiter=null;

  constructor(public login:LoginService, public _recruiter:RecruiterService){}

  ngOnInit(): void {
    this.isLoggedin=this.login.isLoggedIn();
    this.user=this.login.getUser();

      this.login.loginStatusSubject.subscribe(data=>{
        this.isLoggedin=this.login.isLoggedIn();
        this.user=this.login.getUser();
      });
    
    this.isRecruiterLoggedIn=this._recruiter.IsrecruiterLoggedIn();
    this.recruiter=this._recruiter.getUser();
   
      this._recruiter.loginStatusSubject.subscribe((data=>{
        this.isRecruiterLoggedIn=this._recruiter.IsrecruiterLoggedIn();
        this.recruiter=this._recruiter.getUser();
    }))  
    
  }

  public logout(){
    this.login.logout();
    this.isLoggedin=false;
    this.user=null;
    window.location.reload();
  }
}
