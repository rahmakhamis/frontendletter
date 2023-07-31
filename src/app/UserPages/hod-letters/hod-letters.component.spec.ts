import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodLettersComponent } from './hod-letters.component';

describe('HodLettersComponent', () => {
  let component: HodLettersComponent;
  let fixture: ComponentFixture<HodLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodLettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
