import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverLetterComponent } from './receiver-letter.component';

describe('ReceiverLetterComponent', () => {
  let component: ReceiverLetterComponent;
  let fixture: ComponentFixture<ReceiverLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
