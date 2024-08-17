import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-content',
  template: `
    <mat-card-header>
      <div mat-card-avatar class="example-header-image"></div>
      <mat-card-title>Shiba Inu</mat-card-title>
      <mat-card-subtitle>Dog Breed</mat-card-subtitle>
    </mat-card-header>
    <div class="image-wrapper">
      <img
        mat-card-image
        ngSrc="/assets/images/real-estate.webp"
        fill
        priority
      />
    </div>
    <mat-card-content>
      <p>
        The Shiba Inu is the smallest of the six original and distinct spitz
        breeds of dog from Japan.
      </p>
    </mat-card-content>
    <mat-card-actions>
      <button mat-button>LIKE</button>
      <button mat-button>SHARE</button>
    </mat-card-actions>
  `,
  styles: `
  .example-header-image {
    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
    background-size: cover;
  }
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 200px;

    img {
      object-fit: cover;
    }
  }
  `,
  imports: [MatCardModule, NgOptimizedImage, MatButton],
  standalone: true,
})
export class CardContentComponent {}
