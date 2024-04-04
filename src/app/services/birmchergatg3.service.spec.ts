import { TestBed } from '@angular/core/testing';

import { Birmchergatg3Service } from './birmchergatg3.service';

describe('Birmchergatg3Service', () => {
  let service: Birmchergatg3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Birmchergatg3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
