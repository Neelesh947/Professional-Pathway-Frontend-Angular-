import { Component, OnInit } from '@angular/core';
import { RecruiterService } from '../../../Services/recruiter.service';

@Component({
  selector: 'app-sidebar-recruiter',
  templateUrl: './sidebar-recruiter.component.html',
  styleUrl: './sidebar-recruiter.component.css'
})
export class SidebarRecruiterComponent implements OnInit {

  constructor(private _login:RecruiterService){}

  ngOnInit(): void {
  }

  public logout(){
    this._login.logout();
    window.location.reload();
  }
}
