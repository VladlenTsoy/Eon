import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalArithmeticComponent } from './mental-arithmetic.component';

describe('MentalArithmeticComponent', () => {
  let component: MentalArithmeticComponent;
  let fixture: ComponentFixture<MentalArithmeticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentalArithmeticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalArithmeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
