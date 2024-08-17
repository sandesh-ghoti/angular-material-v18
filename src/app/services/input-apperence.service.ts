import { Injectable, signal } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Injectable({
  providedIn: 'root',
})
export class InputApperenceService {
  #apperence = signal<MatFormFieldAppearance>('outline');
  apperence = this.#apperence.asReadonly();
  constructor() {}
  toggle() {
    this.#apperence.set(this.#apperence() === 'outline' ? 'fill' : 'outline');
  }
}
