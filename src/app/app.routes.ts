import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'login/:id',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
    data: {
      role: 'ADMIN'
    }
  }
];
