import { Component, OnInit } from '@angular/core';
import { RecruiterService } from '../../../Services/recruiter.service';

@Component({
  selector: 'app-rprofile',
  templateUrl: './rprofile.component.html',
  styleUrl: './rprofile.component.css'
})
export class RprofileComponent implements OnInit{

  user=null;

  constructor(public login:RecruiterService){}

  ngOnInit(): void {
    this.user=this.login.getUser();
    //console.log(this.user);
  }
}
