import { TestBed } from '@angular/core/testing';

import { Bouchematg5Service } from './bouchematg5.service';

describe('Bouchematg5Service', () => {
  let service: Bouchematg5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bouchematg5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
