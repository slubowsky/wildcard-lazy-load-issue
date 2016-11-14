import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';

import { FooResolve } from './foo-resolve.service';

export const routes: Routes = [
  {
    path: '',
    component: LazyComponent,
    resolve: {
      foo: FooResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [FooResolve]
})
export class LazyRoutingModule { }
