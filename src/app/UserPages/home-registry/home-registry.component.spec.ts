import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegistryComponent } from './home-registry.component';

describe('HomeRegistryComponent', () => {
  let component: HomeRegistryComponent;
  let fixture: ComponentFixture<HomeRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRegistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
