import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverRegistryComponent } from './receiver-registry.component';

describe('ReceiverRegistryComponent', () => {
  let component: ReceiverRegistryComponent;
  let fixture: ComponentFixture<ReceiverRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverRegistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
