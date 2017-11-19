import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopInfoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shop-info',
  templateUrl: 'shop-info.html'
})
export class ShopInfoComponent {

  @Input()
  shop: any;

  constructor() {}

  openingHours(): string {
    const from = String(this.shop.opened_at).slice(0, -3);
    const to   = String(this.shop.closed_at).slice(0, -3);
    return `${from}〜${to}`;
  }
}
