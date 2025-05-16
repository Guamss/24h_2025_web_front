import { Injectable } from '@angular/core';
import * as config from '../../configuration.json'

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  getDomain(): string {
    return config.domain;
  }

  getApiUrl(): string {
    return config.apiURL
  }

  getServerAddress(): string {
    return config.serverAddress
  }

  getTokenTTL(): number {
    return config.tokenTTL
  }
}
