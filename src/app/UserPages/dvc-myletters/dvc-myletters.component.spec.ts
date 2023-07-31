import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvcMylettersComponent } from './dvc-myletters.component';

describe('DvcMylettersComponent', () => {
  let component: DvcMylettersComponent;
  let fixture: ComponentFixture<DvcMylettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvcMylettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvcMylettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
