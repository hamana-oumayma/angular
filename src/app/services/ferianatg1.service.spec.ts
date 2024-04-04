import { TestBed } from '@angular/core/testing';

import { Ferianatg1Service } from './ferianatg1.service';

describe('Ferianatg1Service', () => {
  let service: Ferianatg1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ferianatg1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
