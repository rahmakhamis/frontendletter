import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverVCComponent } from './receiver-vc.component';

describe('ReceiverVCComponent', () => {
  let component: ReceiverVCComponent;
  let fixture: ComponentFixture<ReceiverVCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverVCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
