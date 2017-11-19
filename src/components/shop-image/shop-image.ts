import { Component, Input } from '@angular/core';

/**
 * Generated class for the StoreImageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shop-image',
  templateUrl: 'shop-image.html'
})
export class ShopImageComponent {

  @Input()
  imageUrl: string;

}
