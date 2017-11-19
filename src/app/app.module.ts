import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

// components
import { ShopInfoComponent } from '../components/shop-info/shop-info';
import { ShopImageComponent } from '../components/shop-image/shop-image';
import { ShopMapComponent } from '../components/shop-map/shop-map';

// pages
import { FavoritePage } from '../pages/favorite/favorite';
import { MapPage } from '../pages/map/map';
import { ShopListPage } from '../pages/shop/shop-list/shop-list';
import { ShopDetailPage } from '../pages/shop/shop-detail/shop-detail';
import { ReviewFormPage } from '../pages/shop/review-form/review-form';
import { TabsPage } from '../pages/tabs/tabs';

// services
import { ShopService } from '../services/http/shop.service';
import { UserService } from '../services/user.service';

// factories
import { httpFactory } from '../services/http/http.factory';

@NgModule({
  declarations: [
    MyApp,
    FavoritePage,
    MapPage,
    ShopListPage,
    ShopDetailPage,
    ReviewFormPage,
    TabsPage,
    ShopInfoComponent,
    ShopImageComponent,
    ShopMapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '戻る',
      swipeBackEnabled: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritePage,
    MapPage,
    ShopListPage,
    ShopDetailPage,
    ReviewFormPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, UserService]
    },
    UserService,
    ShopService
  ]
})
export class AppModule { }
