import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'login/:id',
    component: LoginComponent,
    data: {
      role: 'SUPER_ADMIN'
    },
    resolve: {
      message: () => 'Standalone Resolver'
    }
  }
];
