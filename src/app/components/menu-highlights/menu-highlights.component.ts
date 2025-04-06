import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-highlights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-highlights.component.html',
  styleUrl: './menu-highlights.component.scss',
})
export class MenuHighlightsComponent {
  carouselImages: string[] = [
    './assets/images/coffe-products-2.jpg',
    './assets/images/coffe-products-3.jpg',
    './assets/images/coffe-products-4.jpg',
    './assets/images/coffe-products-5.jpg',
  ];
}
