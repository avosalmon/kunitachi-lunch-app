import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ReviewFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-review-form',
  templateUrl: 'review-form.html',
})
export class ReviewFormPage implements OnInit {

  shop: any;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController
  ) {}

  ngOnInit(): void {
    this.shop = this.params.get('shop');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
