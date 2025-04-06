import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatGridListModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  comprar(): void {
    this.router.navigate(['/contato']);
  }
}
