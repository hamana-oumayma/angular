import { TestBed } from '@angular/core/testing';

import { Thynatg3Service } from './thynatg3.service';

describe('Thynatg3Service', () => {
  let service: Thynatg3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Thynatg3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
