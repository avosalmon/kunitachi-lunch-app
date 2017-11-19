import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private id: number;
  private username: string;
  private displayName: string;
  private imageUri: string;
  private token: string;
  private tokenValidUntil: Date;

  constructor() {
    this.refreshUser();
  }

  /**
   * Set user data from local storage.
   */
  refreshUser(): void {
    this.id              = Number(window.localStorage.getItem('id'));
    this.displayName     = window.localStorage.getItem('display_name');
    this.username        = window.localStorage.getItem('username');
    this.imageUri        = window.localStorage.getItem('image_uri');
    this.token           = window.localStorage.getItem('token');
    // this.tokenValidUntil = window.localStorage.getItem('token_valid_until');
  }

  getId(): number {
    return this.id;
  }

  getUserName(): string {
    return this.username;
  }

  getDisplayName(): string {
    return this.displayName;
  }

  getImageUri(): string {
    return this.imageUri;
  }

  getToken(): string {
    return this.token;
  }

  getTokenValidUntil(): Date {
    return this.tokenValidUntil;
  }

}
