import { TestBed } from '@angular/core/testing';

import { BrowserStorageService } from './browser-storage.service';

describe('BrowserStorageService', () => {
  let service: BrowserStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get the value from local storage', () => {
    service.set('key', 'value');
    expect(service.get('key')).toBe('value');
  });
  it('should set the value in local storage', () => {
    service.set('key', 'value');
    expect(localStorage.getItem('key')).toBe('value');
  });
});
