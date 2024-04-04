import { TestBed } from '@angular/core/testing';

import { Birmchergatg1Service } from './birmchergatg1.service';

describe('Birmchergatg1Service', () => {
  let service: Birmchergatg1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Birmchergatg1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
