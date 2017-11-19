import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopImageComponent } from './shop-image';

@NgModule({
  declarations: [
    ShopImageComponent,
  ],
  imports: [
    IonicPageModule.forChild(ShopImageComponent),
  ],
  exports: [
    ShopImageComponent
  ]
})
export class ShopImageComponentModule {}
