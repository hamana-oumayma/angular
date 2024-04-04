import { TestBed } from '@angular/core/testing';

import { Soussetg2Service } from './soussetg2.service';

describe('Soussetg2Service', () => {
  let service: Soussetg2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Soussetg2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
