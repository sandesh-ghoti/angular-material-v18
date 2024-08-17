import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardContentComponent } from './card-content.component';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, CardContentComponent, MatGridList, MatGridTile],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {}
