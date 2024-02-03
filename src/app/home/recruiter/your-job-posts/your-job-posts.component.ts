import { Component, OnInit } from '@angular/core';
import { JobsearchComponent } from '../jobsearch/jobsearch.component';
import { JobsearchService } from '../../../Services/jobsearch.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-your-job-posts',
  templateUrl: './your-job-posts.component.html',
  styleUrls: ['./your-job-posts.component.css']
})
export class YourJobPostsComponent implements OnInit {

  recruiterId: any;

  constructor(private jobsearch: JobsearchService){}

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
    const rec = localStorage.getItem('user');

    if (rec !== null) {
      const userData = JSON.parse(rec);
      this.recruiterId = userData.id;

      console.log(this.recruiterId);
    } else {
      console.error('User data not found in localStorage.');
    }

    this.jobsearch.getJobByWhichtheRecruiterLogin(this.recruiterId).subscribe((data:any)=>{
      this.joblist=data;      
      console.log(this.joblist);
    },(error)=>{
      Swal.fire("error","Something went wrong","error");
    })

  }
}
