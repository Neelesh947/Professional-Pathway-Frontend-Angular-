import { Component, OnInit } from '@angular/core';
import { RecruiterService } from '../../../Services/recruiter.service';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rregister',
  templateUrl: './rregister.component.html',
  styleUrl: './rregister.component.css'
})
export class RregisterComponent implements OnInit{

  public user={
    username:'',
    firstname:'',
    lastname:'',
    password:'',
    email:'',
    phone:'',
    address:''
  }

  constructor(private recruiter:RecruiterService, private route:Router, private snack:MatSnackBar){}

  ngOnInit(): void {
    
  }

  formSubmit(){
    //add user function: user Service

    if(this.user.username=='' || this.user.username==null)
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
      if(this.user.firstname=='' || this.user.firstname==null)
      {
        //alert('user is required !!');
        this.snack.open('FirstName is required !!','ok',{
          duration:3000, 
          verticalPosition: 'bottom',
        })
        return;
      }
      if(this.user.lastname=='' || this.user.lastname==null)
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

      this.recruiter.addRecruiter(this.user).subscribe((data:any)=>{
        //success
      // console.log(data);
      // alert('success');
      Swal.fire('Success','User Name is '+data.userName+' is successfully registered','success');
      this.route.navigate(['rlogin']);
      },(error)=>{
        //error
        console.log('something wrong in the backend');
        Swal.fire('something went wrong !!')
      })
    }

}
