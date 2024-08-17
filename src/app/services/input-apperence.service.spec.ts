import { TestBed } from '@angular/core/testing';

import { InputApperenceService } from './input-apperence.service';

describe('InputApperenceService', () => {
  let service: InputApperenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputApperenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
