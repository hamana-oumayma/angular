import { TestBed } from '@angular/core/testing';

import { Ferianatg2Service } from './ferianatg2.service';

describe('Ferianatg2Service', () => {
  let service: Ferianatg2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ferianatg2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
