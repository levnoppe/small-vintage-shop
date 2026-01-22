import { Component } from '@angular/core';
import { NgFor, CurrencyPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MATERIAL_IMPORTS } from '../../shared/material';
import { MOCK_PRODUCTS, Product } from '../../mock-data/products';

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
}
