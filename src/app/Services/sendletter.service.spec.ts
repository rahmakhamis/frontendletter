import { TestBed } from '@angular/core/testing';

import { SendletterService } from './sendletter.service';

describe('SendletterService', () => {
  let service: SendletterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendletterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
