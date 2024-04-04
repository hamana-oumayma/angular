import { TestBed } from '@angular/core/testing';

import { Birmchergatg4Service } from './birmchergatg4.service';

describe('Birmchergatg4Service', () => {
  let service: Birmchergatg4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Birmchergatg4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
