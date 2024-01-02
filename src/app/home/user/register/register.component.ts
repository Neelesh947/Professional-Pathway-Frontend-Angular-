import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  public user={
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    address:'',
    phone:''
  }

  constructor(private userService:UserService, private snack:MatSnackBar, private router:Router){}

  ngOnInit(): void {
    
  }

  formSubmit(){
    //add user function: user Service

    if(this.user.userName=='' || this.user.userName==null)
      {
        //alert('user is required !!');
        this.snack.open('username is required !!','ok',{
          duration:3000, 
          verticalPosition: 'bottom',
        })
        return;
      }
      if(this.user.password=='' || this.user.password==null)
      {
        //alert('user is required !!');
        this.snack.open('password is required !!','ok',{
          duration:3000, 
          verticalPosition: 'bottom',
        })
        return;
      }
      if(this.user.firstName=='' || this.user.firstName==null)
      {
        //alert('user is required !!');
        this.snack.open('FirstName is required !!','ok',{
          duration:3000, 
          verticalPosition: 'bottom',
        })
        return;
      }
      if(this.user.lastName=='' || this.user.lastName==null)
      {
        //alert('user is required !!');
        this.snack.open('LastName is required !!','ok',{
          duration:3000, 
          verticalPosition: 'bottom',
        })
        return;
      }
      if(this.user.email=='' || this.user.email==null)
      {
        //alert('user is required !!');
        this.snack.open('email is required !!','ok',{
          duration:3000, 
          verticalPosition: 'bottom',
        })
        return;
      }
      if(this.user.phone=='' || this.user.phone==null)
      {
        //alert('user is required !!');
        this.snack.open('phone is required !!','ok',{
          duration:3000, 
          verticalPosition: 'bottom',
        })
        return;
      }
      if(this.user.address=='' || this.user.address==null)
      {
        //alert('user is required !!');
        this.snack.open('address is required !!','ok',{
          duration:3000, 
          verticalPosition: 'bottom',
        })
        return;
      }

    this.userService.addUser(this.user).subscribe((data:any)=>{
      //success
      // console.log(data);
      // alert('success');
      Swal.fire('Success','User Name is '+data.userName+' is successfully registered','success');
      this.router.navigate(['ulogin']);
    },(error)=>{
      //error
      console.log('something wrong in the backend');
      Swal.fire('something went wrong !!')
    })
  }
}
