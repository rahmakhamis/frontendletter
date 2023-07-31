import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanLettersComponent } from './dean-letters.component';

describe('DeanLettersComponent', () => {
  let component: DeanLettersComponent;
  let fixture: ComponentFixture<DeanLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeanLettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeanLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
