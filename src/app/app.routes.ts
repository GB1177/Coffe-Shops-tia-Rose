import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'produtos',
    loadComponent: () =>
      import('./components/products/products.component').then(
        (m) => m.ProductsComponent
      ),
  },
  { path: 'contato', component: ContactComponent },
  { path: 'reviews', component: ReviewsComponent },
];
