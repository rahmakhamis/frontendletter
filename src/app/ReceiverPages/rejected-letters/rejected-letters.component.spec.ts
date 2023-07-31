import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedLettersComponent } from './rejected-letters.component';

describe('RejectedLettersComponent', () => {
  let component: RejectedLettersComponent;
  let fixture: ComponentFixture<RejectedLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedLettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
