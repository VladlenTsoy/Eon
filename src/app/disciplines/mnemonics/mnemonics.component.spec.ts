import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnemonicsComponent } from './mnemonics.component';

describe('MnemonicsComponent', () => {
  let component: MnemonicsComponent;
  let fixture: ComponentFixture<MnemonicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnemonicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnemonicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
