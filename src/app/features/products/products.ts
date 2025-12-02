import { Component } from '@angular/core';
import { NgFor, CurrencyPipe } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../shared/material';

import { MOCK_PRODUCTS, Product } from '../../mock-data/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, CurrencyPipe,...MATERIAL_IMPORTS],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products {
  products: Product[] = MOCK_PRODUCTS;
}
