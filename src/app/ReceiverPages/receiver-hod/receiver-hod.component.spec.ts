import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverHODComponent } from './receiver-hod.component';

describe('ReceiverHODComponent', () => {
  let component: ReceiverHODComponent;
  let fixture: ComponentFixture<ReceiverHODComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverHODComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverHODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
