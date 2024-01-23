import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Services/login.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrl: './sidebar-user.component.css'
})
export class SidebarUserComponent implements OnInit{

  constructor(private _login:LoginService){}
  ngOnInit(): void {
  }

  public logout(){
    this._login.logout();
    window.location.reload();
  }
}
