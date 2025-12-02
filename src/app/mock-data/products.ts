// src/app/mock-data/products.ts

export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Vintage Leather Wallet',
    price: 45,
    imageUrl: 'assets/mock/vintage-wallet.jpg',
    description: 'Handcrafted leather wallet from the 1970s.'
  },
  {
    id: 2,
    title: 'Antique Brass Clock',
    price: 120,
    imageUrl: 'assets/mock/brass-clock.jpg',
    description: 'Restored brass table clock with intricate details.'
  },
  {
    id: 3,
    title: 'Retro Coffee Grinder',
    price: 75,
    imageUrl: 'assets/mock/coffee-grinder.jpg',
    description: 'Fully functional 1960s mechanical grinder.'
  }
];
