import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsearchlistComponent } from './jobsearchlist.component';

describe('JobsearchlistComponent', () => {
  let component: JobsearchlistComponent;
  let fixture: ComponentFixture<JobsearchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobsearchlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsearchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
