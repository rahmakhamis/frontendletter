import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanMylettersComponent } from './dean-myletters.component';

describe('DeanMylettersComponent', () => {
  let component: DeanMylettersComponent;
  let fixture: ComponentFixture<DeanMylettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeanMylettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeanMylettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
