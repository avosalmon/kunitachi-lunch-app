import { Component } from '@angular/core';

import { FavoritePage } from '../favorite/favorite';
import { MapPage } from '../map/map';
import { ShopListPage } from '../shop/shop-list/shop-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ShopListPage;
  tab2Root = FavoritePage;
  tab3Root = MapPage;

  constructor() {

  }
}
