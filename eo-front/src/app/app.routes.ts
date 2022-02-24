import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginGuard } from './services/guards/login-guard.guard';
import { AdminGuard } from './services/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/').then(m => m.LoginModule),
  },
  {
    path: 'personas',
    canActivate: [LoginGuard, AdminGuard,VerificaTokenGuard],
    loadChildren: () => import('./paginas/personas/personas.module').then( m => m.PersonasModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
