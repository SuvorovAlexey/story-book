import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import Nora from '@primeng/themes/nora';
import Laura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Laura,
        options: {
          prefix: 'p',
          // сломал своим стилем (которого нет), чтобы убралась темная тема
          darkModeSelector: 'my-style',
          cssLayer: false
        },
      }
    })
  ]
};
