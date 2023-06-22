import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverNavComponent } from './receiver-nav.component';

describe('ReceiverNavComponent', () => {
  let component: ReceiverNavComponent;
  let fixture: ComponentFixture<ReceiverNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
