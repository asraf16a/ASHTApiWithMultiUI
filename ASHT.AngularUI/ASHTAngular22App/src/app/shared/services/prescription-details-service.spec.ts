import { TestBed } from '@angular/core/testing';

import { PrescriptionDetailsService } from './prescription-details-service';

describe('PrescriptionDetailsService', () => {
  let service: PrescriptionDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
