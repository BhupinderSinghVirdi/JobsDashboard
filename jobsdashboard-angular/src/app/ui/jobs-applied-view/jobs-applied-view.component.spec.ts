import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsAppliedViewComponent } from './jobs-applied-view.component';

describe('JobsAppliedViewComponent', () => {
  let component: JobsAppliedViewComponent;
  let fixture: ComponentFixture<JobsAppliedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsAppliedViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsAppliedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
