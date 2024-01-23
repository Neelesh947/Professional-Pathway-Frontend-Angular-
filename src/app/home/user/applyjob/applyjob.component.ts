import { Component, OnInit } from '@angular/core';
import { JobsearchService } from '../../../Services/jobsearch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrl: './applyjob.component.css'
})
export class ApplyjobComponent implements OnInit {

  jobId: any;
  jobTitle: any;

  job: any[]=[];
  

  constructor(private _job:JobsearchService, private _route:ActivatedRoute){}

  ngOnInit(): void {
    this.jobId=this._route.snapshot.params['jobId'];
   // console.log(this.jobId);
    this.jobTitle=this._route.snapshot.params['title'];
   // console.log(this.jobTitle);

    this._job.getJobByJobId(this.jobId).subscribe((data:any)=>{
      this.job=Array.isArray(data) ? data : [data];;
      console.log(this.job);
    })
  }


}
