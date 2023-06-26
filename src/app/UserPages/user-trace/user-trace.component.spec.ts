import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTraceComponent } from './user-trace.component';

describe('UserTraceComponent', () => {
  let component: UserTraceComponent;
  let fixture: ComponentFixture<UserTraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTraceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
