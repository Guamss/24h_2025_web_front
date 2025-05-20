import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {myPreset} from './preset';
import {MessageService} from 'primeng/api';


// Config basique, mypreset est un preset de style provenant de primeng
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    MessageService,
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: myPreset
      }
    }),
    importProvidersFrom([BrowserAnimationsModule]),
  ]
};

