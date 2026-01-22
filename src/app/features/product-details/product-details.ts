import { NgIf, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../shared/material';
import { Product, MOCK_PRODUCTS } from '../../mock-data/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf, CurrencyPipe, RouterLink, ...MATERIAL_IMPORTS],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.scss'],
})
export class ProductDetails {
  private route = inject(ActivatedRoute);

  product?: Product;

  constructor() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    this.product = MOCK_PRODUCTS.find((p) => p.id === id);
  }

  private cart = inject(CartService);

  addToCart() {
    if (!this.product) return;
    this.cart.add(this.product, 1);
  }
}
