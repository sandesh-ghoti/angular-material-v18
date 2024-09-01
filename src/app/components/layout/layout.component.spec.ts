import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { of } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from '../sidebar/sidebar.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let mockThemeService: jasmine.SpyObj<ThemeService>;
  let mockBreakpointObserver: jasmine.SpyObj<BreakpointObserver>;

  beforeEach(async () => {
    mockThemeService = jasmine.createSpyObj('ThemeService', [
      'theme',
      'setTheme',
    ]);
    mockThemeService.theme.and.returnValue('dark');

    mockBreakpointObserver = jasmine.createSpyObj('BreakpointObserver', [
      'observe',
    ]);
    mockBreakpointObserver.observe.and.returnValue(
      of({ matches: false, breakpoints: {} })
    ); // Default to non-mobile

    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        SidebarComponent,
        NoopAnimationsModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        { provide: ThemeService, useValue: mockThemeService },
        { provide: BreakpointObserver, useValue: mockBreakpointObserver },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set isMobile to true when handset breakpoint is matched', () => {
    mockBreakpointObserver.observe.and.returnValue(
      of({ matches: true, breakpoints: {} })
    );
    component.ngOnInit();
    expect(component.isMobile).toBeTrue();
  });
  it('should toggle the theme', () => {
    // Simulate initial 'light' theme
    mockThemeService.theme.and.returnValue('light');
    component.toggleTheme();
    expect(mockThemeService.setTheme).toHaveBeenCalledWith('dark');

    // Simulate toggling to 'dark' theme
    mockThemeService.theme.and.returnValue('dark');
    component.toggleTheme();
    expect(mockThemeService.setTheme).toHaveBeenCalledWith('light');
  });
});
