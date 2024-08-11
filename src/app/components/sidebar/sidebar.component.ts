import { Component, inject } from '@angular/core';
import { SIDEBAR_LINKS } from './sidebar-options';
import { MatSidenav } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../services/theme.service';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatNavList,
    MatIconModule,
    MatButtonModule,
    MatListItem,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.component.html',
  styles: `.sidebar-link {
    margin-bottom: 0.35rem;
  }
  mat-nav-list {
    overflow-y: auto;
  }
  `,
})
export class SidebarComponent {
  sidebarLinks = SIDEBAR_LINKS;
  constructor(
    private sidenav: MatSidenav,
    private themeService: ThemeService
  ) {}

  closeSidenav() {
    if (this.sidenav.mode === 'over') {
      this.sidenav.close();
    }
  }
}
