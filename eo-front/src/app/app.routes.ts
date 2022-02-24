import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  }
  // {
  //   path: 'personas',
  //   canActivate: [LoginGuard, AdminGuard,VerificaTokenGuard],
  //   loadChildren: () => import('./paginas/personas/personas.module').then( m => m.PersonasModule )
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
