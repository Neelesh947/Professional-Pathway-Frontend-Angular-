import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourJobPostsComponent } from './your-job-posts.component';

describe('YourJobPostsComponent', () => {
  let component: YourJobPostsComponent;
  let fixture: ComponentFixture<YourJobPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourJobPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourJobPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
