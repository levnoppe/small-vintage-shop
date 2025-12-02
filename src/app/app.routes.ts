// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home').then(m => m.HomeComponent)
      },
      // more child routes will go here:
      // {
      //   path: 'products',
      //   loadComponent: () =>
      //     import('./features/products/products').then(m => m.ProductsComponent)
      // },
      // etc.
    ]
  },
  { path: '**', redirectTo: '' }
];
