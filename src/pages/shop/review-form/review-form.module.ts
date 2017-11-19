import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewFormPage } from './review-form';

@NgModule({
  declarations: [
    ReviewFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewFormPage),
  ],
  exports: [
    ReviewFormPage
  ]
})
export class ReviewFormPageModule {}
