import { TestBed } from '@angular/core/testing';

import { Birmchergatg2Service } from './birmchergatg2.service';

describe('Birmchergatg2Service', () => {
  let service: Birmchergatg2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Birmchergatg2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
