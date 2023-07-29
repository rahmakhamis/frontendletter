import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverReportComponent } from './receiver-report.component';

describe('ReceiverReportComponent', () => {
  let component: ReceiverReportComponent;
  let fixture: ComponentFixture<ReceiverReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
