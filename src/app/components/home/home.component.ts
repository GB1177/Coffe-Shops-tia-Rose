import { Component } from '@angular/core';
import { MenuHighlightsComponent } from '../menu-highlights/menu-highlights.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuHighlightsComponent,
    BannerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
