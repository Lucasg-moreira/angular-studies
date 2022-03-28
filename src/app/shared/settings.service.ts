import { Injectable } from '@angular/core';

import '@angular/common/locales/global/pt';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  getLocale() {
    return 'pt'
  }

  constructor() { }
}
