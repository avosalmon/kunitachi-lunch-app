import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';

import { ReviewFormPage } from '../review-form/review-form';
import { ShopService } from '../../../services/http/shop.service';

@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html'
})
export class ShopDetailPage implements OnInit {

  shop: any;

  mode: string = 'picture';

  constructor(
    public params: NavParams,
    public modal: ModalController,
    public shopService: ShopService
  ) {}

  ngOnInit(): void {
    this.shop = this.params.get('shop');
  }

  openModal(): void {
    let reviewFormModal = this.modal.create(ReviewFormPage, { shop: this.shop });
    reviewFormModal.present();
  }
}
