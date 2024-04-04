import { TestBed } from '@angular/core/testing';

import { Soussetg1Service } from './soussetg1.service';

describe('Soussetg1Service', () => {
  let service: Soussetg1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Soussetg1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
