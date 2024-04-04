import { TestBed } from '@angular/core/testing';

import { Bouchematg3Service } from './bouchematg3.service';

describe('Bouchematg3Service', () => {
  let service: Bouchematg3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bouchematg3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
