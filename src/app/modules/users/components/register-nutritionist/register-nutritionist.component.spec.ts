import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNutritionistComponent } from './register-nutritionist.component';

describe('RegisterNutritionistComponent', () => {
  let component: RegisterNutritionistComponent;
  let fixture: ComponentFixture<RegisterNutritionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNutritionistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNutritionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
