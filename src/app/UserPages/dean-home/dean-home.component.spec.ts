import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanHomeComponent } from './dean-home.component';

describe('DeanHomeComponent', () => {
  let component: DeanHomeComponent;
  let fixture: ComponentFixture<DeanHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeanHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
