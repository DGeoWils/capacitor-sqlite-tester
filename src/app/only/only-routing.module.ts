import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlyPage } from './only.page';

const routes: Routes = [
  {
    path: '',
    component: OnlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlyPageRoutingModule {}
