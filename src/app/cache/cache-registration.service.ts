import { Injectable } from '@angular/core';

@Injectable()
export class CacheRegistrationService {
  private services = [];

  public addedToCache(serviceUri: string) {
    console.log(`%c Getting cache ${serviceUri}`, 'color: purple');
    return this.services.indexOf(serviceUri) > -1;
  }

  public addToCache(serviceUri: string) {
    console.log(`%c Adding to cache for ${serviceUri}`, 'color: blue');
    // Check if not already added to list
    if (!this.addedToCache(serviceUri)) {
      this.services.push(serviceUri);
    }
  }
}
