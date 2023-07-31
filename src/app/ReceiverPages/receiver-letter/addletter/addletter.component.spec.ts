import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddletterComponent } from './addletter.component';

describe('AddletterComponent', () => {
  let component: AddletterComponent;
  let fixture: ComponentFixture<AddletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
