import { Component, computed, inject } from '@angular/core';
import { NgIf, CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { MATERIAL_IMPORTS } from '../../shared/material';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NgIf, CurrencyPipe, RouterLink, ReactiveFormsModule, ...MATERIAL_IMPORTS],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
})
export class Checkout {
  readonly cart = inject(CartService);
  private fb = inject(FormBuilder);

  readonly hasItems = computed(() => this.cart.totalItems() > 0);

  readonly form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.minLength(7)]],
    address: ['', [Validators.required, Validators.minLength(5)]],
    notes: [''],
  });

  submit() {
    if (!this.hasItems()) return;

    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    // TODO later: send order to backend
    console.log('Checkout submit:', {
      customer: this.form.value,
      items: this.cart.items(),
      total: this.cart.totalPrice()
    });

    // For now we do NOT clear the cart automatically (until backend exists)
    // this.cart.clear();
  }
}
