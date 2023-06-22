import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLetterComponent } from './user-letter.component';

describe('UserLetterComponent', () => {
  let component: UserLetterComponent;
  let fixture: ComponentFixture<UserLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
