import { Component, OnInit } from '@angular/core';
import { JobsearchService } from '../../../Services/jobsearch.service';

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrl: './jobsearch.component.css'
})
export class JobsearchComponent implements OnInit{
  
  constructor( private _joblist:JobsearchService){}

  joblist=[
    {
      jobId: "",
      title: "",
      description: "",
      experience: "",
      company: "",
      location: "",
      salary: "",
      employmentType: "",
      skills: "",
      applicationDeadlines: "",
      contactInformation: "",
      postDate: "",
      recruiterId: "",
      userId: ""      
    }
  ];


  ngOnInit(): void {
    
    this._joblist.getAllJobPosted().subscribe((data:any)=>{
      //console.log(data);
      this.joblist=data;
    },(error)=>{
      console.log("something went wrong");
    })

    
  }



}
