import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { SegementButtonComponent } from './segment-button.component';
import { IconButtonComponent } from './icon-button.component';
import { FabButtonComponent } from './fab-button.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    SectionComponent,
    SegementButtonComponent,
    FabButtonComponent,
    MatButtonModule,
    MatIcon,
    IconButtonComponent,
  ],
  templateUrl: './button.component.html',
})
export class ButtonComponent {}
