import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const pagesRoutes: Routes = [
  // Mantenimiento SIGEPE
  { path: '', component: HomeComponent },
  // Barrios
  // { path: 'barrios', component: BarriosComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forChild(mantenimientoRoutes) ],
  exports: [ RouterModule ]
})
export class MantenimietoRoutesModule { }
