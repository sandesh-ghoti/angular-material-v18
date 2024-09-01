import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let matSidenav: MatSidenav;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatButtonModule,
        RouterLink,
        RouterLinkActive,
        RouterModule.forRoot([]),
      ],
      providers: [
        {
          provide: MatSidenav,
          useValue: jasmine.createSpyObj('MatSidenav', [
            'open',
            'mode',
            'close',
          ]),
        },
      ],
    }).compileComponents();

    matSidenav = TestBed.inject(MatSidenav);
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should close the sidenav if it is in over mode', () => {
    matSidenav.mode = 'over';
    component.closeSidenav();
    expect(matSidenav.close).toHaveBeenCalled();
  });
  it('should not close the sidenav if it is not in over mode', () => {
    matSidenav.mode = 'side';
    component.closeSidenav();
    expect(matSidenav.close).not.toHaveBeenCalled();
  });
});
