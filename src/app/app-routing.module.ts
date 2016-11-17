import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '1/lazy',
    pathMatch: 'full'
  },
  {
    path: ':id/lazy',
    loadChildren: './lazy/lazy.module#LazyModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
