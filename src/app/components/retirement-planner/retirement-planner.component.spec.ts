import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementPlannerComponent } from './retirement-planner.component';

describe('RetirementPlannerComponent', () => {
  let component: RetirementPlannerComponent;
  let fixture: ComponentFixture<RetirementPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetirementPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
