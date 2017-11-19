import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpMeta } from './http-meta';

@Injectable()
export class ShopService {

  private defaultMeta: HttpMeta = {
    limit: 10,
    offset: 0,
    sort: 'id',
    direction: 'desc'
  };

  constructor(private http: Http) { }

  all(meta?: HttpMeta): Observable<any[]> {
    const url: string = '/shops' + this.formatParameters(meta);
    return this.http.get(url)
                    .map((response: Response) => {
                      return response.json().shops;
                    });
  }

  with(relationships: string, meta?: HttpMeta): Observable<any[]> {
    const url: string = '/shops/with/' + relationships + this.formatParameters(meta);
    return this.http.get(url)
                    .map((response: Response) => {
                      return response.json().shops;
                    });
  }

  find(id: number): Observable<any> {
    const url: string = `/shops/${id}`;
    return this.http.get(url)
                    .map((response: Response) => {
                      return response.json().shop;
                    });
  }

  private formatParameters(meta: HttpMeta): string {
    meta = meta || this.defaultMeta;

    let params: string = '';
    params += '?limit='     + encodeURIComponent(String(meta.limit));
    params += '&offset='    + encodeURIComponent(String(meta.offset));
    params += '&sort='      + encodeURIComponent(meta.sort);
    params += '&direction=' + encodeURIComponent(meta.direction);

    return params;
  }
}
