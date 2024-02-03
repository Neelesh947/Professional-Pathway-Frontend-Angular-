import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsearchService {

  constructor(private http:HttpClient) { }

  public getAllJobPosted()
  {
    return this.http.get(`http://localhost:8083/jobpost/`)
  }

  public getJobByJobId(jobId:any)
  {
    return this.http.get(`http://localhost:8083/jobpost/${jobId}`);
  }

  // post job
  public getJobByWhichtheRecruiterLogin(recruiterId:any)
  {
    return this.http.get(`http://localhost:8083/jobpost/recruiter/${recruiterId}`);
  }

  //post job
  public postjob(job: any)
  {
    return this.http.post(`http://localhost:8083/jobpost/`,job)
  }
}
