import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Services/login.service';

@Component({
  selector: 'app-uprofile',
  templateUrl: './uprofile.component.html',
  styleUrl: './uprofile.component.css'
})
export class UprofileComponent implements OnInit{

  user=null;

  constructor(public login:LoginService){}

  ngOnInit(): void {
    this.user=this.login.getUser();
    //console.log(this.user);
  }

}
