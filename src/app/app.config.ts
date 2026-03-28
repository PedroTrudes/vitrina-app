import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

const toastConfig = {
  maxOpened: 1,
  timeOut: 1000,
  autoDismiss: true,
  preventDuplicates: true,
  positionClass: 'toast-top-right',
  progressBar: true

};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideToastr(toastConfig)
  ]
};
