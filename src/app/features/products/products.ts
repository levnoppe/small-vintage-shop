import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../shared/material';
import { RouterLink } from '@angular/router';

import { MOCK_PRODUCTS, Product } from '../../mock-data/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe,...MATERIAL_IMPORTS,RouterLink],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products {
  products: Product[] = MOCK_PRODUCTS;
}
