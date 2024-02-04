import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JobsearchService } from '../../../Services/jobsearch.service';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrl: './jobpost.component.css',
  
})
export class JobpostComponent implements OnInit{

  ngOnInit(): void {
    
  }

  constructor(private _jobpost:JobsearchService, private snack:MatSnackBar){}

  public job={
    title:'',
    description:'',
    experience:'',
    company:'',
    location:'',
    salary:'',
    employmentType:'',
    skills:'',
    applicationDeadlines:'',
    contactInformation:'',
    noOfPost:'',
    recruiterId:''
  }

  formSubmit(){
    
    const rec=localStorage.getItem('user');
    
    if(rec)
    {
      const userData=JSON.parse(rec);
      const recID=userData.id;

      //console.log(recID)

    this._jobpost.postjob(this.job).subscribe((data:any)=>{
      this.job=data;
      Swal.fire("Success","Job Posted Successfully",'success');
     },(error)=>{
      console.log(error);
      Swal.fire("Error","Something went wrong",'error');
     })
     this.job.recruiterId=recID;
    }
   // console.log(rec);
    
  }
  

}
