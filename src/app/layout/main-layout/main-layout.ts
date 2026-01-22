// src/app/layout/main-layout/main-layout.ts
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

import { MATERIAL_IMPORTS } from '../../shared/material';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ...MATERIAL_IMPORTS
  ],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss']
})
export class MainLayout {
   private cart = inject(CartService);
  readonly cartCount = this.cart.totalItems;

  isSidenavOpen = false;
}
