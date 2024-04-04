import { TestBed } from '@angular/core/testing';

import { Radestg1Service } from './radestg1.service';

describe('Radestg1Service', () => {
  let service: Radestg1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Radestg1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
