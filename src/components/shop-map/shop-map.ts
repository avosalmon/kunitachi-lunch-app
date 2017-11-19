import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shop-map',
  templateUrl: 'shop-map.html'
})
export class ShopMapComponent {

  @Input()
  place: string;

  private key = 'AIzaSyAIxOrX9RJ3hltDpLr1FfR0iUYCNtU_piE';

  constructor(private sanitizer: DomSanitizer) {}

  mapSource(): SafeUrl {
    const endpoint = 'https://www.google.com/maps/embed/v1/place';
    const query    = encodeURIComponent(this.place);
    const source   = `${endpoint}?q=${query}&key=${this.key}`;

    return this.sanitizer.bypassSecurityTrustResourceUrl(source);
  }

}
