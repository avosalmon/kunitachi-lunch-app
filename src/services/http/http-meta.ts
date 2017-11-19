import { Injectable } from '@angular/core';

@Injectable()
export class HttpMeta {
  limit: number;
  offset: number;
  sort: string;
  direction: string;
}
