import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isLoggedin=false;
  user=null;

  constructor(public login:LoginService){}

  ngOnInit(): void {
    this.isLoggedin=this.login.isLoggedIn();
    this.user=this.login.getUser();

    this.login.loginStatusSubject.subscribe(data=>{
      this.isLoggedin=this.login.isLoggedIn();
      this.user=this.login.getUser();
    });
  }

  public logout(){
    this.login.logout();
    this.isLoggedin=false;
    this.user=null;
    window.location.reload();
  }
}
