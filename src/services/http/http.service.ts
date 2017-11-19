import { Injectable } from '@angular/core';
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { UserService } from '../user.service';

@Injectable()
export class HttpService extends Http {

  private endpoint = 'http://kunitachi-lunch.frb.io';

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private userService: UserService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
      return super.request(url, options);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.endpoint + url;

    return super.get(url, this.mergeRequestOptionArgs(options))
                .catch((response: Response) => this.handleError(response));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.endpoint + url;

    return super.post(url, body, this.mergeRequestOptionArgs(options))
                .catch((response: Response) => this.handleError(response));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.endpoint + url;

    return super.put(url, body, this.mergeRequestOptionArgs(options))
                .catch((response: Response) => this.handleError(response));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.endpoint + url;

    return super.delete(url, this.mergeRequestOptionArgs(options))
                .catch((response: Response) => this.handleError(response));
  }

  private mergeRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
    if (! options) {
      options = new RequestOptions();
    }

    if (! options.headers) {
      options.headers = new Headers();
    }

    options.headers.append('Content-Type', 'application/json');
    options.headers.append('Authorization', 'Bearer ' + this.userService.getToken());

    return options;
  }

  private handleError(error: Response | any): Observable<any> {
    if (error instanceof Response) {
      console.log(error.json())

      if (error.status === 401) {
        // TODO: add to error service to display toast on the screen.
        // TODO: redirect to /admin/login
      }

      if (error.status === 500) {
        // TODO: add to error service to display toast on the screen.
      }
    }

    return Observable.throw(error);
  }
}
