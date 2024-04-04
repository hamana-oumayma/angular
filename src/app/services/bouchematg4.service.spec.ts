import { TestBed } from '@angular/core/testing';

import { Bouchematg4Service } from './bouchematg4.service';

describe('Bouchematg4Service', () => {
  let service: Bouchematg4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bouchematg4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
