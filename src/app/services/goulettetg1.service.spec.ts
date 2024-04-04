import { TestBed } from '@angular/core/testing';

import { Goulettetg1Service } from './goulettetg1.service';

describe('Goulettetg1Service', () => {
  let service: Goulettetg1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Goulettetg1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
