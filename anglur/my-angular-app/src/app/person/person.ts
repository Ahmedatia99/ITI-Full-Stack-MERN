import { Component, ElementRef, contentChildren, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.html',
  styleUrls: ['./person.css']
})
export class Person {
  countries = contentChildren<ElementRef>('country');

  constructor() {
    effect(() => {
      const elements = this.countries();
      if (!elements || elements.length === 0) return;

      elements.forEach((el) => {
        const text = el.nativeElement.textContent.trim();
        el.nativeElement.style.color = this.getColor(text);
        el.nativeElement.style.fontWeight = 'bold';
      });
    });
  }

  getColor(country: string): string {
    switch (country.toUpperCase()) {
      case 'USA':
        return 'blue';
      case 'UK':
        return 'red';
      case 'HK':
        return 'orange';
      case 'MARS':
        return 'purple';
      default:
        return 'gray';
    }
  }
}
