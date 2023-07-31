import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DVCLETTERSComponent } from './dvc-letters.component';

describe('DVCLETTERSComponent', () => {
  let component: DVCLETTERSComponent;
  let fixture: ComponentFixture<DVCLETTERSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DVCLETTERSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DVCLETTERSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
