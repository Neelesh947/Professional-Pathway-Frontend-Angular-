import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrl: './jobpost.component.css',
  
})
export class JobpostComponent implements OnInit{

  skills:string[]=[];

  ngOnInit(): void {
    
  }


}
