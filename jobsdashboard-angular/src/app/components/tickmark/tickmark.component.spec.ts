import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickmarkComponent } from './tickmark.component';

describe('TickmarkComponent', () => {
  let component: TickmarkComponent;
  let fixture: ComponentFixture<TickmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickmarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TickmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
