import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobsAppliedComponent } from './view-jobs-applied.component';

describe('ViewJobsAppliedComponent', () => {
  let component: ViewJobsAppliedComponent;
  let fixture: ComponentFixture<ViewJobsAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobsAppliedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJobsAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
