import { Component, inject } from '@angular/core';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MATERIAL_IMPORTS } from '../../shared/material';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe, RouterLink, ...MATERIAL_IMPORTS],
  templateUrl: 'cart.html',
  styleUrls: ['cart.scss']
})
export class Cart {
  readonly cart = inject(CartService);

  // i18n-ready: keep strings as whole phrases (later replace with translation keys)
  clearCart() {
    this.cart.clear();
  }
}
