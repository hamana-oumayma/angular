import { TestBed } from '@angular/core/testing';

import { Thynatg2Service } from './thynatg2.service';

describe('Thynatg2Service', () => {
  let service: Thynatg2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Thynatg2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
