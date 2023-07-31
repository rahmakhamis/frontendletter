import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcMylettersComponent } from './vc-myletters.component';

describe('VcMylettersComponent', () => {
  let component: VcMylettersComponent;
  let fixture: ComponentFixture<VcMylettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcMylettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcMylettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
