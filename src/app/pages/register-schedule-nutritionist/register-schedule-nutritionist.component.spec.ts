import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterScheduleNutritionistComponent } from './register-schedule-nutritionist.component';

describe('RegisterScheduleNutritionistComponent', () => {
  let component: RegisterScheduleNutritionistComponent;
  let fixture: ComponentFixture<RegisterScheduleNutritionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterScheduleNutritionistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterScheduleNutritionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
