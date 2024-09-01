import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { BrowserStorageService } from './browser-storage.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let mockBrowserStorageService = jasmine.createSpyObj<BrowserStorageService>(
    'BrowserStorageService',
    ['get', 'set']
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: BrowserStorageService,
          useValue: mockBrowserStorageService,
        },
      ],
    });
  });

  it('should be created', () => {
    service = TestBed.inject(ThemeService);
    expect(service).toBeTruthy();
  });
  it('should set theme based on device preferences (auto) when user did not set theme manually', () => {
    mockBrowserStorageService.get.and.returnValue(null);
    service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('auto');
  });
  it('should set theme based on device preferences (dark) when user set theme manually', () => {
    mockBrowserStorageService.get.and.returnValue('dark');
    service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('dark');
  });
  it('should set theme based on device preferences (light) when user set theme manually', () => {
    mockBrowserStorageService.get.and.returnValue('light');
    service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('light');
  });
});
