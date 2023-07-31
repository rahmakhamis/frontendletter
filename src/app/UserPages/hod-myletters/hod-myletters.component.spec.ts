import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodMylettersComponent } from './hod-myletters.component';

describe('HodMylettersComponent', () => {
  let component: HodMylettersComponent;
  let fixture: ComponentFixture<HodMylettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodMylettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodMylettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
