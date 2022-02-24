import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'account',
    component: AccountComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    AccountComponent
  ]
})
export class PagesModule {}
