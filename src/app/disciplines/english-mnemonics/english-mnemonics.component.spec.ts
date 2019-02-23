import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishMnemonicsComponent } from './english-mnemonics.component';

describe('EnglishMnemonicsComponent', () => {
  let component: EnglishMnemonicsComponent;
  let fixture: ComponentFixture<EnglishMnemonicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishMnemonicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishMnemonicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
