import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovedLettersComponent } from './aproved-letters.component';

describe('AprovedLettersComponent', () => {
  let component: AprovedLettersComponent;
  let fixture: ComponentFixture<AprovedLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovedLettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprovedLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
