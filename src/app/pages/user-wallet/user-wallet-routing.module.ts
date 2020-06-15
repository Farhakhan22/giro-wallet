import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserWalletPage } from './user-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: UserWalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserWalletPageRoutingModule {}
