import { XHRBackend, Http, RequestOptions } from "@angular/http";

import { HttpService } from "./http.service";
import { UserService } from '../user.service';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, userService: UserService): Http {
  return new HttpService(xhrBackend, requestOptions, userService);
}
