import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopInfoComponent } from './shop-info';

@NgModule({
  declarations: [
    ShopInfoComponent,
  ],
  imports: [
    IonicPageModule.forChild(ShopInfoComponent),
  ],
  exports: [
    ShopInfoComponent
  ]
})
export class ShopInfoComponentModule {}
