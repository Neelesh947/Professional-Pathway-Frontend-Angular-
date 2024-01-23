import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsearchService } from '../../../Services/jobsearch.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-jobsearchlist',
  templateUrl: './jobsearchlist.component.html',
  styleUrl: './jobsearchlist.component.css'
})
export class JobsearchlistComponent implements OnInit{
  
  joblist=[
    {
      jobId: "12345",
      title: "Software Engineer",
      description: "This job is for professional software engineers with good knowledge of Java.",
      experience: "3 years",
      company: "Example Company",
      location: "Noida",
      salary: "$80,000 - $100,000",
      employmentType: "Full-Time",
      skills: "Java, Hibernate, Spring Boot, REST-API",
      applicationDeadlines: "2024-01-19",
      contactInformation: "contact@example.com",
      postDate: "2023-12-25",
      recruiterId: "17da614e-6fa1-4c92-8d22-c5e61cea7c31",
      userId: "5e138861-bcde-4f25-88be-18ffaa3fec44"      
    }
  ];

  constructor(private _route:ActivatedRoute, private _joblist:JobsearchService,
    private _snack:MatSnackBar){}
  
  ngOnInit(): void {
    this._joblist.getAllJobPosted().subscribe((data:any)=>{
      //console.log(data);
      this.joblist=data;
    },(error)=>{
      console.log("something went wrong");
    })
  }

}
