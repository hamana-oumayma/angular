import { TestBed } from '@angular/core/testing';

import { Thynatg1Service } from './thynatg1.service';

describe('Thynatg1Service', () => {
  let service: Thynatg1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Thynatg1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
