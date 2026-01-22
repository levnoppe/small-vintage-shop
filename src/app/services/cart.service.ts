import { Injectable, computed, effect, signal } from '@angular/core';
import { Product } from '../mock-data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

const STORAGE_KEY = 'svs_cart_v1';

function safeParseCart(json: string | null): CartItem[] {
  if (!json) return [];
  try {
    const data = JSON.parse(json) as CartItem[];
    if (!Array.isArray(data)) return [];
    // minimal validation
    return data
      .filter(x => x?.product?.id != null && typeof x.quantity === 'number')
      .map(x => ({ product: x.product, quantity: Math.max(1, Math.floor(x.quantity)) }));
  } catch {
    return [];
  }
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _items = signal<CartItem[]>(
    safeParseCart(localStorage.getItem(STORAGE_KEY))
  );

  readonly items = this._items.asReadonly();

  readonly totalItems = computed(() =>
    this._items().reduce((sum, i) => sum + i.quantity, 0)
  );

  readonly totalPrice = computed(() =>
    this._items().reduce((sum, i) => sum + i.quantity * i.product.price, 0)
  );

  constructor() {
    // Persist changes to localStorage
    effect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._items()));
    });
  }

  add(product: Product, quantity = 1) {
    const qty = Math.max(1, Math.floor(quantity));
    const items = this._items();
    const idx = items.findIndex(i => i.product.id === product.id);

    if (idx >= 0) {
      const updated = items.map((i, index) =>
        index === idx ? { ...i, quantity: i.quantity + qty } : i
      );
      this._items.set(updated);
      return;
    }

    this._items.set([...items, { product, quantity: qty }]);
  }

  decrement(productId: number) {
    const items = this._items();
    const idx = items.findIndex(i => i.product.id === productId);
    if (idx < 0) return;

    const item = items[idx];
    if (item.quantity <= 1) {
      this.remove(productId);
      return;
    }

    this._items.set(
      items.map(i =>
        i.product.id === productId ? { ...i, quantity: i.quantity - 1 } : i
      )
    );
  }

  remove(productId: number) {
    this._items.set(this._items().filter(i => i.product.id !== productId));
  }

  clear() {
    this._items.set([]);
  }
}
