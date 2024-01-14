import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{


  isLoggedIn=false;
  user=null;

  constructor(public login:LoginService){}

  ngOnInit(): void {
    
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }
}
