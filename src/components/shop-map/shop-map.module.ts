import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopMapComponent } from './shop-map';

@NgModule({
  declarations: [
    ShopMapComponent,
  ],
  imports: [
    IonicPageModule.forChild(ShopMapComponent),
  ],
  exports: [
    ShopMapComponent
  ]
})
export class ShopMapComponentModule {}
