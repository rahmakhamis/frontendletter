import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverDeanComponent } from './receiver-dean.component';

describe('ReceiverDeanComponent', () => {
  let component: ReceiverDeanComponent;
  let fixture: ComponentFixture<ReceiverDeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverDeanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
