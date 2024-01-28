import { Component, OnInit } from '@angular/core';
import { RecruiterService } from '../../../Services/recruiter.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rlogin',
  templateUrl: './rlogin.component.html',
  styleUrl: './rlogin.component.css'
})
export class RloginComponent implements OnInit{
  
  loginData={
    username:"",
    password:""
  }

  constructor(private _login:RecruiterService, private _router:Router, private _snack:MatSnackBar){}

  ngOnInit(): void {
  }


  formSubmit(){
    if(this.loginData.username.trim()=='' || this.loginData.username==null)
    {
      this._snack.open('Username is required !!','ok', {
        duration:3000
      });
      return;
    }

    if(this.loginData.password.trim()=='' || this.loginData.password==null)
    {
      this._snack.open('Password is required !!','ok', {
        duration:3000
      });
      return;
    }

    //request to generate tokens
    this._login.generateTokens(this.loginData).subscribe((data:any)=>{
      console.log("success");
      console.log(data);

      //login
      this._login.loginRecruiter(data.token);

      this._login.getCurrentUser().subscribe((user:any)=>{
        this._login.setUser(user);
        console.log(user);

        //redirect to the user console
        if(this._login.getUser!=null)
        {
          this._router.navigate(['recruiter-dashboard']);
          this._login.loginStatusSubject.next(true);
        }
        else
        {
          this._login.logout();
          location.reload();
        }
      },
      (error)=>{
        console.log("Error !");
        console.log(error);
        this._snack.open("INVALID DETAILS !!    TRY AGAIN","OK",{
        duration: 3000
        });
      })
    },(error)=>{
      console.log("error")
    })
  }

}
