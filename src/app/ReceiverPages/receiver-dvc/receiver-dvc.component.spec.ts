import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverDVCComponent } from './receiver-dvc.component';

describe('ReceiverDVCComponent', () => {
  let component: ReceiverDVCComponent;
  let fixture: ComponentFixture<ReceiverDVCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverDVCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverDVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
