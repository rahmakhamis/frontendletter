import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcLettersComponent } from './vc-letters.component';

describe('VcLettersComponent', () => {
  let component: VcLettersComponent;
  let fixture: ComponentFixture<VcLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcLettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
