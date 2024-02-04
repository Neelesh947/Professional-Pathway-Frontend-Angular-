import { Component, OnInit } from '@angular/core';
import { JobsearchService } from '../../../Services/jobsearch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-jobs',
  templateUrl: './update-jobs.component.html',
  styleUrl: './update-jobs.component.css'
})
export class UpdateJobsComponent implements OnInit{


constructor(private jobSerach: JobsearchService, private _route:ActivatedRoute, private _router:Router){}

job:any
jobId=0;

  isFieldDisscaled=true;

  ngOnInit(): void {
    this.jobId=this._route.snapshot.params['jobId'];
    //console.log(this.jobId)
    
    this.jobSerach.getJobByJobId(this.jobId).subscribe((data:any)=>{
      this.job=data;
      console.log(data)
    },(error)=>{
      Swal.fire("error","Something Went Wrong","error");
    })
  }

  formSubmit(){
    this.jobSerach.updatejobpost(this.jobId, this.job).subscribe((data:any)=>{
      this.job=data
      //console.log(data)
      Swal.fire("success","updated successfully",'success')
      this._router.navigate(['recruiter-dashboard/job-post-recruiter'])
    },(error)=>{
      console.log(error);
      Swal.fire('Error!','error while saving data','error');
    })
  }
}
