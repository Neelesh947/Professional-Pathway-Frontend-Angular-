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

  toppings = new FormControl('');

  toppingList: string[] = ['Core Java', 'Advanced java', 'Java', 'Python', 'JavaScript', 'C#', 'C++', 'Ruby', 'Swift', 'Kotlin',
  'HTML5', 'CSS3', 'React', 'Angular', 'Vue.js', 'Node.js',
  'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Oracle Database',
  'Spring Boot', 'Django', 'Express.js', 'Flask',
  'Android Development', 'iOS Development',
  'Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)',
  'Docker', 'Kubernetes', 'Jenkins', 'Git',
  'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-Learn',
  'Ethical Hacking', 'Network Security', 'Penetration Testing', 'Cryptography',
  'Verbal Communication', 'Written Communication', 'Listening Skills',
  'Critical Thinking', 'Analytical Skills', 'Decision Making',
  'Collaboration', 'Conflict Resolution', 'Team Building',
  'Flexibility', 'Open-mindedness', 'Willingness to Learn',
  'Prioritization', 'Meeting Deadlines',
  'Delegation', 'Decision Making', 'Motivation',
  'Innovation', 'Thinking Outside the Box',
  'Accuracy', 'Thoroughness',
  'Self-awareness', 'Empathy',
  'Agile', 'Scrum', 'Kanban',
  'Budgeting', 'Financial Analysis',
  'Digital Marketing', 'Content Marketing', 'Social Media Marketing',
  'Relationship Building', 'Negotiation Skills',
  'Problem Resolution', 'Communication Skills',
  'Goal Setting', 'SWOT Analysis',
  'Business Planning', 'Risk Management',
  'Business Intelligence', 'Data Visualization'];

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
