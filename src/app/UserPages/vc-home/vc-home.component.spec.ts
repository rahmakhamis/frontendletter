import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcHomeComponent } from './vc-home.component';

describe('VcHomeComponent', () => {
  let component: VcHomeComponent;
  let fixture: ComponentFixture<VcHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
