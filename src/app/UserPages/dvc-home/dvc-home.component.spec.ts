import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DVCHOMEComponent } from './dvc-home.component';

describe('DVCHOMEComponent', () => {
  let component: DVCHOMEComponent;
  let fixture: ComponentFixture<DVCHOMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DVCHOMEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DVCHOMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
