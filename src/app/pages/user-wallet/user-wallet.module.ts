import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserWalletPageRoutingModule } from './user-wallet-routing.module';

import { UserWalletPage } from './user-wallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserWalletPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UserWalletPage]
})
export class UserWalletPageModule {}
