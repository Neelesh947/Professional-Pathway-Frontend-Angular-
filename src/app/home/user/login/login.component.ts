import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../../Services/login.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginData={
    username:"",
    password:""
  }

  constructor(private snack:MatSnackBar, private login:LoginService, private router:Router){}

  ngOnInit(): void {
    
  }

  userLogin(){

    if(this.loginData.username.trim()=='' || this.loginData.username==null)
    {
      this.snack.open('Username is required !!','ok', {
        duration:3000
      });
      return;
    }

    if(this.loginData.password.trim()=='' || this.loginData.password==null)
    {
      this.snack.open('Password is required !!','ok', {
        duration:3000
      });
      return;
    }

    //request server to generate tokens
    this.login.generateTokens(this.loginData).subscribe((data:any)=>{
      console.log("success");
      console.log(data);

      //login.....
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe((user:any)=>{
          this.login.setUser(user);
          console.log(user);

          //redirect to the user dashboard
          if(this.login.getUser!=null)
            {
              this.router.navigate(['user-dashboard']);
              this.login.loginStatusSubject.next(true);
            }
          else
            {
              this.login.logout();
              location.reload();
            }

        },(error)=>{
          console.log("Error !");
          console.log(error);
          this.snack.open("INVALID DETAILS !!    TRY AGAIN","OK",{
          duration: 3000
          });
        })

    },(error)=>{
      console.log("error")
    })
  }
}
