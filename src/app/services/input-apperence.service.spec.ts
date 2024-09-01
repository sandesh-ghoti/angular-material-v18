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
  it('should toggle the apperence', () => {
    service.toggle();
    expect(service.apperence()).toBe('fill');
    service.toggle();
    expect(service.apperence()).toBe('outline');
  });
  it('should provide the default apperence', () => {
    expect(service.apperence()).toBe('outline');
  });
});
