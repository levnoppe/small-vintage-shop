import { Component, inject } from '@angular/core';
import { NgFor, CurrencyPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MATERIAL_IMPORTS } from '../../shared/material';
import { MOCK_PRODUCTS, Product } from '../../mock-data/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    CurrencyPipe,
    RouterLink,
    ...MATERIAL_IMPORTS
  ],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products {
  products: Product[] = MOCK_PRODUCTS;
  readonly cart = inject(CartService);

addToCart(p: Product) {
  this.cart.add(p, 1);
}

}
