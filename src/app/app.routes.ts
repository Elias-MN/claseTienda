import { Routes } from '@angular/router';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { Plantilla1Component } from '@shared/layouts/plantilla1/plantilla1.component';

export const routes: Routes = [
  {
    path: "", component: Plantilla1Component, children: [
      { path: "", loadComponent: () => import('./domains/products/pages/list/list.component') },
      { path: "list", loadComponent: () => import('./domains/products/pages/list/list.component') },
      { path: "about", loadComponent: () => import('./domains/info/pages/about/about.component') },
      { path: "productDetails/:id", loadComponent: () => import('@products/pages/product-details/product-details.component') }
    ]
  },
  { path: "**", component: NotFoundComponent }
];


