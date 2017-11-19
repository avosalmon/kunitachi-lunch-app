import { Component, OnInit } from '@angular/core';

import { ShopDetailPage } from '../../shop/shop-detail/shop-detail';
import { HttpMeta } from '../../../services/http/http-meta';
import { ShopService } from '../../../services/http/shop.service';

@Component({
  selector: 'page-shop-list',
  templateUrl: 'shop-list.html'
})
export class ShopListPage implements OnInit {

  shops: any[];

  meta: HttpMeta = {
    limit: 20,
    offset: 0,
    sort: 'id',
    direction: 'desc'
  };

  shopDetailPage: any = ShopDetailPage;

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getShops();
  }

  private getShops(): void {
    this.shopService.with('tags,images', this.meta)
                    .subscribe(shops => this.shops = shops);
  }

}
