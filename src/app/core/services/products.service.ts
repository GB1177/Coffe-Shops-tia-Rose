import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    return [
      {
        name: 'Café Expresso',
        description: 'Café forte e encorpado.',
        price: 'R$ 5,00',
        image: 'assets/images/express-coffee-2.jpg',
      },
      {
        name: 'Cappuccino',
        description: 'Café com leite e espuma.',
        price: 'R$ 7,00',
        image: 'assets/images/cappuccino-coffee-1.jpg',
      },
      {
        name: 'Mocaccino',
        description: 'Café com leite e espuma.',
        price: 'R$ 7,00',
        image: 'assets/images/mappuccino-coffee-2.jpg',
      },
      {
        name: 'Café Tia rosa 500g (Grão)',
        description: 'Pacote com 500g de Café Tia Rosa.',
        price: 'R$ 30,00',
        image: 'assets/images/coffee-products-1.jpg',
      },
    ];
  }
}
